import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import TopicsList from "../../topics/TopicsList.jsx";
import { Box, Typography, Card, CardContent, CardActions} from "@mui/material";

const ShortArticle = (props) => {
    const [articleText, setArticleText] = useState("");

    useEffect(() => {
        if (props.article.text && props.article.text.startsWith('/articles/')) {
            console.log(props.article.text);
            // Fetch the text file
            fetch(props.article.text)
                .then((response) => response.text())
                .then((data) => setArticleText(data))
                .catch((error) => console.error("Error fetching article text:", error));
        } else {
            setArticleText(props.article.text);
        }
    }, [props.article.text]);

    const cutText = articleText.substring(0, props.cardSize === 'big' ? 900 : 300) +
        `<a href="/articles-list/article/${props.article.idArticle}" style="text-decoration: none; color: inherit;"> ...</a>`;


    const cardSizeStyles =
        props.cardSize === "big"
            ? {width: "100%", height: 300}
            : {width: 400, height: 300};

    return (
        <Card
            sx={{
                ...cardSizeStyles,
                backgroundColor: "background.shortArticle",
                border: "1px",
                borderColor: "divider",
                borderRadius: "10px",
                padding: "15px",
                margin: "8px",
                gap: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "background-color 0.5s ease, border-color 0.5s ease",
                "&:hover": {
                    backgroundColor: "action.shortArticleHover",
                    borderColor: "text.primary",
                },
            }}
        >
            {/* Title Section */}
            <CardContent sx={{ padding: 0 }}>
                <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                        margin: 0,
                        padding: 0,
                        fontSize: "19px",
                        fontWeight: "bold",
                        color: "text.primary",
                        textAlign: "left",
                        textDecoration: "none",
                        "& a": {
                            textDecoration: "underline",
                            color: "text.primary",
                            "&:visited": { color: "text.primary" },
                            "&:hover": { color: "text.primary" },
                        },
                    }}
                >
                    <Link to={`/articles-list/article/${props.article.idArticle}`}>
                        {props.article.title}
                    </Link>
                </Typography>
            </CardContent>

            {/* Text Section */}
            <CardContent
                sx={{
                    flex: 1,
                    marginY: 0,
                    padding: 0,
                    color: "text.primary",
                    overflow: "hidden",
                    textOverflow: "inherit",
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    lineHeight: 1.5,
                    maxHeight: "calc(1.4em * 7)", // 6 lines max
                    whiteSpace: "normal",
                }}
            >
                <Typography variant="body2" component="p" sx={{ margin: 0 }}>
                    <div className="article-content" dangerouslySetInnerHTML={{__html: cutText}}/>
                </Typography>
            </CardContent>

            {/* Footer Section */}
            <CardActions
                sx={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                    fontSize: "12px",
                    color: "text.primary",
                    "& > div": {
                        display: "flex",
                        alignItems: "center",
                        fontSize: "12px",
                        color: "text.articleFooter",
                        transition: "color 0.5s ease",
                    },
                }}
            >
                <Box className="short-article-author">{props.article.author}</Box>
                <Box className="short-article-creation">
                    {props.article.creationDate}
                </Box>
                <Box className="short-article-topics">
                    <TopicsList
                        topicsList={props.article.topics}
                        topicsData={props.topicsData}
                    />
                </Box>
                <Box className="short-article-review">{props.article.review}</Box>
            </CardActions>
        </Card>
    );

};

export default ShortArticle;