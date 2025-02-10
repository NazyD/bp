import {useParams, useNavigate} from "react-router-dom";

import TopicsList from "../../topics/TopicsList.jsx";
import EditForm from "../edit/EditForm.jsx";
import MoveUpButton from "../../components/MoveUpButton.jsx";
import React, {useEffect, useState} from "react";
import {Box, Button, Paper, Typography} from "@mui/material";
import {Grid} from "@mui/system";

const Article = (props) => {
    const [articleText, setArticleText] = useState("");
    const {id} = useParams();
    const navigate = useNavigate();

    const article = props.articlesData.find(article => article.idArticle === parseInt(id));
    const articleTopics = article.topics.map((topic) => {
        return props.topicsData.find(top => top.idTopic === topic);
    });

    useEffect(() => {
        if (article.text && article.text.startsWith('/articles/')) {
            // Fetch the text file
            fetch(article.text)
                .then((response) => response.text())
                .then((data) => setArticleText(data))
                .catch((error) => console.error("Error fetching article text:", error));
        } else {
            setArticleText(article.text);
        }
    }, [article.text]);

    const handleDelete = () => {
        const updatedArticles = props.articlesData.filter(
            (article) => article.idArticle !== parseInt(id)
        );

        props.setArticlesData(updatedArticles);
        localStorage.setItem("articles.json", JSON.stringify(updatedArticles));

        navigate("/articles-list")
        // upravit a nastavit do contextu, odebrat z komponentu, vytvořit zvlášt práci s datama
        // doplnit vyhledavani clanku
    }

    return (
        <Paper
            elevation={3}
            sx={{
                maxWidth: "900px",
                margin: "20px auto",
                padding: "20px",
                backgroundColor: "background.paper",
                borderRadius: "10px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            }}
        >
            <MoveUpButton/>

            {props.visibleEdiPopUp ? <EditForm
                article={article}
                articleTopics={articleTopics}
                articlesData={props.articlesData}
                setVisibleEditPopup={props.setVisibleEditPopup}
                setArticlesData={props.setArticlesData}
                topicsData={props.topicsData}/> : null}

            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Grid container spacing={0} sx={{alignCenter: "true"}}>
                    {/* Title Column */}
                    <Grid item xs={12} md={5}>
                        <Typography
                            variant="h4"
                            component="h1"
                            sx={{
                                fontWeight: "bold",
                                color: "text.primary",
                                marginBottom: "10px",
                                textAlign: "right",
                                pr: 1,
                            }}
                        >
                            {article.title}
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Box
                            component="img"
                            src={article.picture}
                            alt="article image"
                            sx={{
                                height: "300px",
                                width: "auto",
                                objectFit: "cover",
                            }}
                        />
                    </Grid>

                    <Grid
                        item
                        xs={12}
                        md={4}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-end", // Align metadata at the bottom
                            textAlign: "left",
                            fontSize: "9px",
                            color: "text.secondary", // Less visible metadata
                            pl: 1,
                            pb: 1,
                        }}
                    >
                        <Typography variant="body2"
                                    sx={{fontSize: "11px"}}>
                            <strong>Autor:</strong> {article.author}
                        </Typography>
                        <Typography variant="body2"
                                    sx={{fontSize: "11px"}}>
                            <strong>Vytvořeno:</strong> {article.creationDate}
                        </Typography>
                        <Typography variant="body2"
                                    sx={{fontSize: "11px"}}>
                            <strong>Kategorie:</strong>{" "}
                            <TopicsList
                                topicsList={article.topics}
                                topicsData={props.topicsData}
                            />
                        </Typography>
                    </Grid>
                </Grid>
            </Box>

            <Box
                sx={{
                    marginTop: 4,
                    padding: 3,
                    textAlign: "justify",
                    fontSize: "18px",
                    lineHeight: "1.8",
                    overflow: "auto",
                }}
                dangerouslySetInnerHTML={{__html: articleText}}
            />

            <Box
                sx={{
                    marginTop: 4,
                    display: "flex",
                    justifyContent: "flex-end",
                    gap: 2,
                }}
            >
                <Button
                    variant="contained"
                    onClick={props.setVisibleEditPopup}
                    sx={{
                        backgroundColor: "#5cb85c",
                        color: "white",
                        "&:hover": {
                            backgroundColor: "#4cae4c",
                        },
                    }}
                >
                    Upravit
                </Button>
                <Button
                    variant="contained"
                    onClick={handleDelete}
                    sx={{
                        backgroundColor: "#d9534f",
                        color: "white",
                        "&:hover": {
                            backgroundColor: "#c9302c",
                        },
                    }}
                >
                    Odstranit
                </Button>
            </Box>
        </Paper>
    );

};

export default Article;