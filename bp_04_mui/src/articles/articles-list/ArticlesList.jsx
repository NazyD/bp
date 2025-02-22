import React, { useState } from "react";
import { Box, Button, TextField, IconButton, useTheme } from "@mui/material";
import SmallCardIcon from "/assets/icons/grid-card.png";
import BigCardIcon from "/assets/icons/big-card.png";
import ShortArticle from "../article/ShortArticle.jsx";
import CreateForm from "../creation/CreateForm.jsx";
import TopicManagement from "../../topics/TopicManagement.jsx";

const ArticlesList = (props) => {
    const theme = useTheme();
    const [searchString , setSearchString] = useState("");
    const [cardSize, setCardSize] = useState('small');


    const normalizeString = (str) => {
        return str
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase();
    }

    const filteredArticles = props.articlesData.filter((article) =>
        normalizeString(article.title).includes(normalizeString(searchString)));

    function getArticlesList(articlesData) {
        return articlesData.map((article) => {
            return <ShortArticle
                key={article.idArticle}
                article={article}
                topicsData={props.topicsData}
                cardSize={cardSize}
            />
        })
    }

    console.log(props.articlesData);

    return (
        <Box
            sx={{
                padding: "0 30px",
                display: "flex",
                flexDirection: "column",
                gap: 2,
                [theme.breakpoints.down('md')]: {
                    margin: "3px 0",
                    padding: "3px 0",
                    width: "100%",
                },
            }}
        >
            {/* Tools Container */}
            <Box
                sx={{
                    minHeight: "50px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "20px",
                    marginBottom: "20px",
                    [theme.breakpoints.down('md')]: {
                        flexDirection: "column",
                    },
                }}
            >
                {/* Search Input */}
                <TextField
                    value={searchString}
                    onChange={(e) => setSearchString(e.target.value)}
                    placeholder="hledat..."
                    variant="outlined"
                    size="small"
                    sx={{
                        width: "400px",
                        backgroundColor: theme.palette.background.paper,
                        borderRadius: "20px",
                        [theme.breakpoints.down('md')]: {
                            width: "250px",
                        },
                        "& .MuiOutlinedInput-root": {
                            padding: "5px 10px",
                            fontSize: "14px",
                            color: theme.palette.text.primary,
                            borderRadius: "20px",
                            boxShadow: "inset 2px 2px 5px rgba(0, 0, 0, 0.3)",
                            "&.Mui-focused": {
                                borderColor: theme.palette.text.primary,
                                boxShadow: "inset 2px 2px 8px rgba(0, 0, 0, 0.5)",
                            },
                        },
                    }}
                />
                {/* View Buttons */}
                <Box
                    sx={{
                        height: "50px",
                        display: "flex",
                        gap: 1,
                    }}
                >
                    <IconButton
                        onClick={() => setCardSize("small")}
                        sx={{
                            height: "auto",
                            padding: "5px",
                            border: `1px solid ${theme.palette.divider}`,
                            backgroundColor: theme.palette.background.button,
                            borderRadius: "5px",
                            "& img": { width: "40px", height: "40px" },
                            "&:hover": {
                                backgroundColor: theme.palette.action.buttonHover,
                            },
                        }}
                    >
                        <img src={SmallCardIcon} alt="Small Cards" />
                    </IconButton>

                    <IconButton
                        onClick={() => setCardSize("big")}
                        sx={{
                            height: "auto",
                            padding: "5px",
                            border: `1px solid ${theme.palette.divider}`,
                            backgroundColor: theme.palette.background.button,
                            borderRadius: "5px",
                            "& img": { width: "40px", height: "40px" },
                            "&:hover": {
                                backgroundColor: theme.palette.action.buttonHover,
                            },
                        }}
                    >
                        <img src={BigCardIcon} alt="Big Cards" />
                    </IconButton>
                </Box>
                {/* Action Buttons */}
                {props.creationForms && (
                    <Box
                        sx={{
                            height: "50px",
                            display: "flex",
                            gap: 1,
                        }}
                    >
                        <Button
                            onClick={props.setVisibility}
                            sx={{
                                height: "100%",
                                padding: "8px 12px",
                                border: `1px solid ${theme.palette.divider}`,
                                backgroundColor: theme.palette.background.button,
                                color: theme.palette.text.primary,
                                borderRadius: "5px",
                                fontSize: "16px",
                                "&:hover": {
                                    backgroundColor: theme.palette.action.buttonHover,
                                },
                                textTransform: 'none',
                            }}
                        >
                            Vytvořit článek
                        </Button>
                        {props.visiblePopUp && (
                            <>
                                <Box
                                    sx={{
                                        position: "fixed",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "100%",
                                        backgroundColor: "rgba(0, 0, 0, 0.7)",
                                        zIndex: 999,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                    onClick={props.setVisibility}
                                ></Box>
                                <Box
                                    sx={{
                                        position: "fixed",
                                        top: "50%",
                                        left: "50%",
                                        transform: "translate(-50%, -50%)",
                                        width: "50%",
                                        maxHeight: "78%",
                                        backgroundColor: theme.palette.background.paper,
                                        borderRadius: "10px",
                                        padding: "15px",
                                        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                                        overflowY: "auto",
                                        zIndex: 1000,
                                    }}
                                >
                                    <Button
                                        onClick={props.setVisibility}
                                        sx={{
                                            position: "absolute",
                                            top: "10px",
                                            right: "10px",
                                            fontSize: "18px",
                                            fontWeight: "bold",
                                            color: theme.palette.text.primary,
                                            background: "none",
                                            border: "none",
                                            cursor: "pointer",
                                            "&:hover": {
                                                color: theme.palette.action.hover,
                                            },
                                        }}
                                    >
                                        X
                                    </Button>
                                    <CreateForm
                                        articlesData={props.articlesData}
                                        setVisibility={props.setVisibility}
                                        setArticlesData={props.setArticlesData}
                                        topicsData={props.topicsData}
                                    />
                                </Box>
                            </>
                        )}
                        <Button
                            onClick={props.setTopVisibility}
                            sx={{
                                padding: "8px 12px",
                                border: `1px solid ${theme.palette.divider}`,
                                backgroundColor: theme.palette.background.button,
                                color: theme.palette.text.primary,
                                borderRadius: "5px",
                                fontSize: "16px",
                                "&:hover": {
                                    backgroundColor: theme.palette.action.buttonHover,
                                },
                                textTransform: 'none',
                            }}
                        >
                            Topics
                        </Button>
                        {props.topVisibility && (
                            <>
                                <Box
                                    sx={{
                                        position: "fixed",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "100%",
                                        backgroundColor: "rgba(0, 0, 0, 0.7)",
                                        zIndex: 999,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                    onClick={props.setTopVisibility}
                                ></Box>
                                <Box
                                    sx={{
                                        position: "fixed",
                                        top: "50%",
                                        left: "50%",
                                        transform: "translate(-50%, -50%)",
                                        width: "50%",
                                        maxHeight: "78%",
                                        backgroundColor: theme.palette.background.paper,
                                        borderRadius: "10px",
                                        padding: "15px",
                                        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                                        overflowY: "auto",
                                        zIndex: 1000,
                                    }}
                                >
                                    <Button
                                        onClick={props.setTopVisibility}
                                        sx={{
                                            position: "absolute",
                                            top: "10px",
                                            right: "10px",
                                            fontSize: "18px",
                                            fontWeight: "bold",
                                            color: theme.palette.text.primary,
                                            background: "none",
                                            border: "none",
                                            cursor: "pointer",
                                            "&:hover": {
                                                color: theme.palette.action.hover,
                                            },
                                        }}
                                    >
                                        X
                                    </Button>
                                    <TopicManagement
                                        setTopVisibility={props.setTopVisibility}
                                        setTopicsData={props.setTopicsData}
                                        setArticlesData={props.setArticlesData}
                                        articlesData={props.articlesData}
                                        topicsData={props.topicsData}
                                    />
                                </Box>
                            </>
                        )}
                    </Box>
                )}
            </Box>
            {/* Articles List */}
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px",
                    justifyContent: "center",
                }}
            >
                {getArticlesList(filteredArticles)}
            </Box>
        </Box>
    );

};

export default ArticlesList;