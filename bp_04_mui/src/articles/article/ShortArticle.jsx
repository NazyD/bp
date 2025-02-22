import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import TopicsList from "../../topics/TopicsList.jsx";
import {Box, Typography, Card, CardContent, CardActions, useTheme} from "@mui/material";
import {Image} from "@mui/icons-material";

const ShortArticle = (props) => {
    const [articleText, setArticleText] = useState("");
    const [charLimit, setCharLimit] = useState(400);
    const theme = useTheme();

    const calculateCharLimit = () => {
        const width = window.innerWidth;

        if (props.cardSize === 'big') {
            if (width <= 530) return 400;
            if (width <= 830) return 690;
            if (width <= 1190) return 950;
            return 1000;
        } else {
            if (width <= 425) return 100;
            if (width <= 768) return 200;
            if (width <= 1024) return 250;
            return 400;
        }
    };
    useEffect(() => {
        const updateCharLimit = () => setCharLimit(calculateCharLimit());
        updateCharLimit();

        window.addEventListener('resize', updateCharLimit);
        return () => window.removeEventListener('resize', updateCharLimit);
    }, [props.cardSize]);

    useEffect(() => {
        if (props.article.text && props.article.text.startsWith('/articles/')) {
            fetch(props.article.text)
                .then((response) => response.text())
                .then((data) => setArticleText(data))
                .catch((error) => console.error("Error fetching article text:", error));
        } else {
            setArticleText(props.article.text);
        }
    }, [props.article.text]);

    const cutText = articleText.substring(0, charLimit) +
        `<a href="/articles-list/article/${props.article.idArticle}" style="text-decoration: none; color: inherit;"> ...</a>`;


    const cardSizeStyles =
        props.cardSize === "big"
            ? {
                width: "100%",
                height: 300,
                [theme.breakpoints.down('lg')]: {
                    width: "100%",
                    height: "350px",
                },
                [theme.breakpoints.down('md')]: {
                    flex: "1 1 100%",
                    marginBottom: "10px",
                    height: "410px",
                },
            }
            : {
                width: 400,
                height: 300,
                [theme.breakpoints.down('lg')]: {
                    flex: "1 1 calc(45% - 20px)",
                    marginBottom: "20px",
                    height: "275px",
                },
                [theme.breakpoints.down('md')]: {
                    flex: "1 1 100%",
                    marginBottom: "10px",
                    height: "210px",
                },
            };

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
                transition: "transform 0.3s ease, box-shadow 0.3s ease, background-color 0.5s ease",
                position: "relative",
                overflow: "hidden",
                "&:hover": {
                    transform: "translateY(-2px) translateX(-1px)",
                    boxShadow: "0 5px 10px rgba(0, 0, 0, 0.15)",
                    backgroundColor: "action.shortArticleHover",
                },
                "&:hover .sliding-image": {
                    right: "0",
                    opacity: "0.5",
                    maskImage: "linear-gradient(to left, rgba(0, 0, 0, 1) 5%, rgba(0, 0, 0, 0) 95%)",
                },
            }}
        >

            <Box
                component="img"
                sx={{
                    position: "absolute",
                    top: "0",
                    right: "-50%",
                    height: "100%",
                    width: "auto",
                    zIndex: "1",
                    transition: "right 0.9s ease, opacity 0.8s ease",
                    opacity: "0",
                    maskImage: "linear-gradient(to left, rgba(0, 0, 0, 1) 5%, rgba(0, 0, 0, 0) 95%)",
                }} src={props.article.picture} alt="..." className="sliding-image"/>


            {/* Title Section */}
            <CardContent sx={{padding: 0}}>
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
                            "&:visited": {color: "text.primary"},
                            "&:hover": {color: "text.primary"},
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
                    lineHeight: 1.5,
                    maxHeight: "calc(1.4em * 7)", // 6 lines max
                    whiteSpace: "normal",
                    position: "relative",
                    zIndex: "2",
                    background: "transparent",
                }}
            >
                <Typography variant="body2" component="p" sx={{margin: 0}}>
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
                    position: "relative",
                    zIndex: "2",
                    background: "transparent",
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