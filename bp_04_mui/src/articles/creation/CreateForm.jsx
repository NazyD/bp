import React, { useState } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Button,
    Typography, Autocomplete, Chip,
} from "@mui/material";

const defaultForm = {
    title: "",
    text: "",
    author: "",
    creationDate: "",
    editDate: "",
    review: "",
    topics: []
};
function CreateForm(props) {
    const [newArticle, setNewArticle] = useState(defaultForm);
    const [selectedTopics, setSelectedTopics] = useState([]);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setNewArticle((prevFormData) => ({...prevFormData, [name]: value}));
    }

    const handleTopicChange = (event, value) => {
        setNewArticle((prevFormData) => ({ ...prevFormData, topics: value }));
        const selectedTopicIds = value.map((topicName) =>
            props.topicsData.find((topic) => topic.topicName === topicName).idTopic
        );

        setSelectedTopics(selectedTopicIds);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Title: ${newArticle.title}, Text: ${newArticle.text}, Topics: ${newArticle.topics}`);

        // find the last id
        const maxId = props.articlesData.length > 0 ?
            Math.max(...props.articlesData.map(article => article.idArticle)) : 0;

        // current date
        const currentdate = new Date();
        const datetime = currentdate.getDate() + "/" + (currentdate.getMonth()+1)
            + "/" + currentdate.getFullYear() + " "
            + currentdate.getHours() + ":"
            + currentdate.getMinutes() + ":" + currentdate.getSeconds();

        const newArticleData = {
            ...newArticle,
            idArticle: maxId + 1,
            creationDate: datetime,
            topics: selectedTopics,
        };

        // add new article to the list of articles in local storage
        const updatedArticles = [...props.articlesData, newArticleData];
        props.setArticlesData(updatedArticles);
        localStorage.setItem("articles.json", JSON.stringify(updatedArticles));

        setNewArticle(defaultForm);
        props.setVisibility();
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
                    Nový článek
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
                        value={newArticle.title}
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
                        value={newArticle.text}
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
                        value={newArticle.author}
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
                        options={props.topicsData.map((topic) => topic.topicName)}
                        value={newArticle.topics}
                        onChange={handleTopicChange}
                        renderTags={(value, getTagProps) =>
                            value.map((option, index) => (
                                <Chip
                                    key={option}
                                    label={option}
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
                        Vytvořit
                    </Button>

                    {/* Close Button */}
                    <Button
                        onClick={props.setVisibility}
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

export default CreateForm;