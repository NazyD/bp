import React from "react";
import { Box, Typography } from "@mui/material";
import ArticlesList from "./articles-list/ArticlesList.jsx";

const Articles = (props) => {

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
                articlesData={props.articlesData}
                visiblePopUp={props.visiblePopUp}
                setVisibility={props.setVisibility}
                topVisibility={props.topVisibility}
                setTopVisibility={props.setTopVisibility}
                setArticlesData={props.setArticlesData}
                topicsData={props.topicsData}
                setTopicsData={props.setTopicsData}
                creationForms={true}
            />
        </Box>
    );

};

export default Articles;