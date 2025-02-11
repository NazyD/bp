import React, { useEffect, useRef, useState } from "react";
import {
    Autocomplete,
    Button,
    Chip, Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
    Typography
} from "@mui/material";

function EditForm(props) {
    const [editedArticle, setEditedArticle] = useState(props.article);
    const [selectedTopics, setSelectedTopics] = useState([]);

    const [articleText, setArticleText] = useState("");

    useEffect(() => {
        if (editedArticle.text && editedArticle.text.startsWith('/articles/')) {
            // Fetch the text file
            fetch(editedArticle.text)
                .then((response) => response.text())
                .then((data) => setArticleText(data))
                .catch((error) => console.error("Error fetching article text:", error));
        } else {
            setArticleText(editedArticle.text);
        }
    }, [editedArticle.text]);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setEditedArticle({
            ...editedArticle,
            [name]: value,
        });
        if (name === "text") {
            setArticleText(value);
        }
    }

    const handleTopicToggle = (event, value) => {
        // Extract the topic IDs from the selected values
        const selectedTopicIds = value.map((topic) => topic.idTopic);

        // Update the article with the new topic IDs
        setEditedArticle((prevFormData) => ({
            ...prevFormData,
            topics: selectedTopicIds, // Update topics with their IDs
        }));

        // Update the selected topics state
        setSelectedTopics(selectedTopicIds);
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Title: ${editedArticle.title}, Text: ${editedArticle.text}, Topics: ${editedArticle.topics}`);

        // current date
        const currentdate = new Date();
        const datetime = currentdate.getDate() + "/" + (currentdate.getMonth()+1)
            + "/" + currentdate.getFullYear() + " "
            + currentdate.getHours() + ":"
            + currentdate.getMinutes() + ":" + currentdate.getSeconds();

        const updatedArticle = {
            ...editedArticle,
            topics: selectedTopics,
            text: articleText,
            editDate: datetime
        }

        const updatedArticles = props.articlesData.map((a) =>
            a.idArticle === props.article.idArticle ? updatedArticle : a);

        props.setArticlesData(updatedArticles);
        localStorage.setItem("articles.json", JSON.stringify(updatedArticles));

        props.setVisibleEditPopup();
    }

    return(
        <Dialog
            open={true}
            onClose={props.setVisibility}
            fullWidth
            maxWidth="md"
            sx={{
                "& .MuiDialog-paper": {
                    backgroundColor: "background.paper",
                    padding: "15px",
                    borderRadius: 2,
                },
                "& .MuiPaper-root": {
                    "--Paper-shadow": "none",
                    "--Paper-overlay": "none",
                    boxShadow: "none",
                    backgroundImage: "none",
                }
            }}
        >
            <DialogTitle>
                <Typography
                    variant="h4"
                    color="text.primary">
                    Úprava článku
                </Typography>
            </DialogTitle>
            <form onSubmit={handleSubmit}>
                <DialogContent
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                    }}
                >
                    {/* Title Input */}
                    <TextField
                        label="Název"
                        name="title"
                        placeholder="název článku"
                        value={editedArticle.title}
                        onChange={handleChange}
                        required
                        fullWidth
                        variant="outlined"
                        slotProps={{
                            inputLabel: {
                                shrink: true,
                            },
                        }}
                    />

                    {/* Text Input */}
                    <TextField
                        label="Text"
                        name="text"
                        placeholder="text článku"
                        value={articleText}
                        onChange={handleChange}
                        required
                        multiline
                        rows={5}
                        fullWidth
                        variant="outlined"
                        slotProps={{
                            inputLabel: {
                                shrink: true,
                            },
                        }}
                    />

                    {/* Author Input */}
                    <TextField
                        label="Autor"
                        name="author"
                        placeholder="autor článku"
                        value={editedArticle.author}
                        onChange={handleChange}
                        required
                        fullWidth
                        variant="outlined"
                        slotProps={{
                            inputLabel: {
                                shrink: true,
                            },
                        }}
                    />

                    {/* Topics Multi-Select */}
                    <Autocomplete
                        multiple
                        options={props.topicsData} // Pass full topic objects
                        getOptionLabel={(option) => option.topicName} // Display the topic name in the dropdown
                        value={props.topicsData.filter((topic) => editedArticle.topics.includes(topic.idTopic))} // Map topic IDs to topic objects
                        onChange={handleTopicToggle} // Use the fixed handleTopicToggle
                        isOptionEqualToValue={(option, value) => option.idTopic === value.idTopic} // Compare by topic ID
                        renderTags={(value, getTagProps) =>
                            value.map((option, index) => (
                                <Chip
                                    key={option.idTopic}
                                    label={option.topicName} // Display the topic name in tags
                                    {...getTagProps({ index })}
                                    sx={{
                                        backgroundColor: "action.hover",
                                        color: "text.primary",
                                    }}
                                />
                            ))
                        }
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Topics"
                                placeholder="Choose topics"
                                variant="outlined"
                                slotProps={{
                                    inputLabel: {
                                        shrink: true,
                                    },
                                }}
                            />
                        )}
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                backgroundColor: "background.paper",
                            },
                        }}
                    />

                </DialogContent>
                <DialogActions>
                    {/* Submit Button */}
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{
                            backgroundColor: "primary.main",
                            color: "text.primary",
                            "&:hover": {
                                backgroundColor: "action.hover",
                            },
                            textTransform: 'none',
                        }}
                    >
                        Upravit
                    </Button>

                    {/* Close Button */}
                    <Button
                        onClick={props.setVisibleEditPopup}
                        variant="outlined"
                        sx={{
                            borderColor: "text.primary",
                            color: "text.primary",
                            "&:hover": {
                                backgroundColor: "action.hover",
                                borderColor: "text.primary",
                            },
                            textTransform: 'none',
                        }}
                    >
                        Storno
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );

}

export default EditForm;