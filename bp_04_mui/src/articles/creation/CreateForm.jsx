import React, { useState } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    FormControl,
    FormControlLabel,
    Checkbox,
    Button,
    Box,
    Typography,
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

    const handleTopicChange = (e) => {
        const topicId = parseInt(e.target.value);
        if(e.target.checked) {
            setSelectedTopics([...selectedTopics, topicId]);
        } else {
            setSelectedTopics(selectedTopics.filter((id) => id !== topicId));
        }
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
            <DialogTitle
                sx={{
                    padding: 0,
                }}>
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
                    />

                    {/* Topics List */}
                    <FormControl component="fieldset">
                        <Typography variant="body1" sx={{ fontWeight: "bold", color: "text.primary" }}>
                            Topics
                        </Typography>
                        {props.topicsData.map((topic) => (
                            <FormControlLabel
                                key={topic.idTopic}
                                control={
                                    <Checkbox
                                        value={topic.idTopic}
                                        onChange={handleTopicChange}
                                        sx={{
                                            color: "text.primary",
                                            "&.Mui-checked": {
                                                color: "primary.main",
                                            },
                                        }}
                                    />
                                }
                                label={
                                    <Typography variant="body2" color="text.primary">
                                        {topic.topicName}
                                    </Typography>
                                }
                            />
                        ))}
                    </FormControl>
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