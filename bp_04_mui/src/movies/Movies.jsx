import React from "react";
import { Box, Typography } from "@mui/material";
import ArticlesList from "../articles/articles-list/ArticlesList.jsx";

const Movies = (props) => {

    const moviesArticlesData = props.articlesData.filter(article => article.topics.includes(1));

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px", // Optional for spacing
            }}
        >
            <Typography
                variant="h4" // MUI Typography for consistent heading styles
                component="h2"
                sx={{
                    marginBottom: "20px",
                    fontWeight: "bold",
                    color: "text.primary",
                }}
            >
                Seznam článků
            </Typography>
            <ArticlesList
                articlesData={moviesArticlesData}
                visiblePopUp={props.visiblePopUp}
                setVisibility={props.setVisibility}
                topVisibility={props.topVisibility}
                setTopVisibility={props.setTopVisibility}
                setArticlesData={props.setArticlesData}
                topicsData={props.topicsData}
                setTopicsData={props.setTopicsData}
                creationForms={false}/>
        </Box>
    );

};

export default Movies;