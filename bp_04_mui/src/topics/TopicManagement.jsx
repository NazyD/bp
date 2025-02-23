import React, {useState} from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Button,
    Box,
    Typography,
    List,
    ListItem,
    ListItemText,
    IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete"; // easy import of icons from own library

const defaultTopicForm = {
    topicName: ""
};

function TopicManagement(props) {
    const [newTopic, setNewTopic] = useState(defaultTopicForm);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setNewTopic((prevFormData) => ({...prevFormData, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        // find the last id
        const maxId = props.topicsData.length > 0 ?
            Math.max(...props.topicsData.map(top => top.idTopic)) : 0;

        const newTopicData = {
            ...newTopic,
            idTopic: maxId + 1,
        };

        // add new topic to the list of topics in local storage
        const updatedTopic = [...props.topicsData, newTopicData];
        props.setTopicsData(updatedTopic);
        localStorage.setItem("topics.json", JSON.stringify(updatedTopic));

        setNewTopic(defaultTopicForm);
    }

    const handleDelete = (topicId) => {
        // step 1 delete topic
        const updatedTopics = props.topicsData.filter(
            (topic) => topic.idTopic !== topicId
        );

        props.setTopicsData(updatedTopics);
        localStorage.setItem("topics.json", JSON.stringify(updatedTopics));

        // step 2 remove topic from the articles
        const updatedArticles = props.articlesData.map((article) => {
            if(article.topics.includes(topicId)) {
                return {
                    ...article,
                    topics: article.topics.filter((topId) => topId !== topicId),
                };
            }
            return article;
        });

        props.setArticlesData(updatedArticles);
        localStorage.setItem("articles.json", JSON.stringify(updatedArticles));
    }

    return(
        <Dialog
            open={true}
            onClose={props.setTopVisibility}
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
                },
            }}
        >
            <DialogTitle>
                <Typography variant="h4" color="text.primary">
                    Nová kategorie
                </Typography>
            </DialogTitle>
            <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {/* Add Topic Form */}
                <Box component="form"
                     onSubmit={handleSubmit}
                     sx={{
                         display: "flex",
                         flexDirection: "column",
                         gap: 2,
                         marginTop: "8px"}}>
                    <TextField
                        label="Název"
                        name="topicName"
                        placeholder="název kategorie"
                        value={newTopic.topicName}
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
                    <DialogActions>
                        <Button type="submit" variant="contained" sx={{ alignSelf: "flex-start", textTransform: 'none' }}>
                            Vytvořit
                        </Button>
                        <Button
                            onClick={props.setTopVisibility}
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

                </Box>
                {/* List of Topics */}
                <Typography variant="h6" color="text.primary">
                    Existující topics
                </Typography>
                <List>
                    {props.topicsData.map((topic) => (
                        <ListItem
                            key={topic.idTopic}
                            secondaryAction={
                                <IconButton
                                    edge="end"
                                    aria-label="delete"
                                    onClick={() => handleDelete(topic.idTopic)}
                                >
                                    <DeleteIcon />
                                </IconButton>
                            }
                        >
                            <ListItemText
                                primary={topic.topicName}
                                primaryTypographyProps={{ color: "text.primary" }}
                            />
                        </ListItem>
                    ))}
                </List>
            </DialogContent>
        </Dialog>
    );

}

export default TopicManagement;