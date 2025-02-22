import React from 'react';
import {Box, Typography, Link, useTheme} from "@mui/material";
import { FaInstagram, FaEnvelope, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                maxWidth: "600px",
                margin: "50px auto",
                padding: "30px",
                backgroundColor: "background.paper",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                borderRadius: "10px",
                textAlign: "center",
                color: "text.primary",
                transition: "background-color 0.5s ease, color 0.5s ease",
                [theme.breakpoints.down('sm')]: {
                    width: "100%",
                    padding: "5px 0",
                },
            }}
        >
            <Typography
                variant="h5"
                sx={{
                    fontSize: "32px",
                    mb: "20px",
                    color: "text.primary",
                }}
            >
                Kontakty
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    mt: "20px",
                    [theme.breakpoints.down('md')]: {
                        flexDirection: "column",
                        alignItems: "center",
                    },
                    [theme.breakpoints.down('sm')]: {
                        flexDirection: "column",
                        width: "100%",
                    },
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        gap: "15px",
                        backgroundColor: "background.shortArticle",
                        padding: "15px",
                        borderRadius: "8px",
                        transition: "background-color 0.3s ease",
                        cursor: "pointer",
                        [theme.breakpoints.down('md')]: {
                            width: "100%",
                            textAlign: "center",
                        },
                        [theme.breakpoints.down('sm')]: {
                            width: "90%",
                            padding: "10px 4px",
                        },
                        '&:hover': {
                            backgroundColor: 'action.shortArticleHover',
                        },
                    }}
                >
                    <Box
                        sx={{
                            fontSize: "24px",
                            color: "text.primary",
                        }}
                    ><FaInstagram/>
                    </Box>
                    <Link
                        href="https://www.instagram.com/nazar_dovzanin/?hl=cs"
                        target="_blank"
                        rel="noopener"
                        sx={{
                            textDecoration: 'none',
                            fontSize: '18px',
                            color: 'text.primary',
                            transition: "background-color 0.3s ease",
                            '&:hover': {
                                backgroundColor: 'action.shortArticleHover',
                            },
                        }}
                    >
                        instagram
                    </Link>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        gap: "15px",
                        backgroundColor: "background.shortArticle",
                        padding: "15px",
                        borderRadius: "8px",
                        transition: "background-color 0.3s ease",
                        cursor: "pointer",
                        [theme.breakpoints.down('md')]: {
                            width: "100%",
                            textAlign: "center",
                        },
                        [theme.breakpoints.down('sm')]: {
                            width: "90%",
                            padding: "10px 4px",
                        },
                        '&:hover': {
                            backgroundColor: 'action.shortArticleHover',
                        },
                    }}
                >
                    <Box
                        sx={{
                            fontSize: "24px",
                            color: "text.primary",
                        }}
                    ><FaEnvelope/>
                    </Box>
                    <Link
                        href="mailto:dovzanynn@gmail.com"
                        target="_blank"
                        rel="noopener"
                        sx={{
                            textDecoration: 'none',
                            fontSize: '18px',
                            color: 'text.primary',
                            transition: "background-color 0.3s ease",
                            '&:hover': {
                                backgroundColor: 'action.shortArticleHover',
                            },
                        }}
                    >
                        dovzanynn@gmail.com
                    </Link>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        gap: "15px",
                        backgroundColor: "background.shortArticle",
                        padding: "15px",
                        borderRadius: "8px",
                        transition: "background-color 0.3s ease",
                        cursor: "pointer",
                        [theme.breakpoints.down('md')]: {
                            width: "100%",
                            textAlign: "center",
                        },
                        [theme.breakpoints.down('sm')]: {
                            width: "90%",
                            padding: "10px 4px",
                        },
                        '&:hover': {
                            backgroundColor: 'action.shortArticleHover',
                        },
                    }}
                >
                    <Box
                        sx={{
                            fontSize: "24px",
                            color: "text.primary",
                        }}
                    ><FaLinkedin/>
                    </Box>
                    <Link
                        href={""}
                        sx={{
                            textDecoration: 'none',
                            fontSize: '18px',
                            color: 'text.primary',
                            transition: "background-color 0.3s ease",
                            '&:hover': {
                                backgroundColor: 'action.shortArticleHover',
                            },
                        }}
                    >
                        N/A
                    </Link>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        gap: "15px",
                        backgroundColor: "background.shortArticle",
                        padding: "15px",
                        borderRadius: "8px",
                        transition: "background-color 0.3s ease",
                        cursor: "pointer",
                        [theme.breakpoints.down('md')]: {
                            width: "100%",
                            textAlign: "center",
                        },
                        [theme.breakpoints.down('sm')]: {
                            width: "90%",
                            padding: "10px 4px",
                        },
                        '&:hover': {
                            backgroundColor: 'action.shortArticleHover',
                        },
                    }}
                >
                    <Box
                        sx={{
                            fontSize: "24px",
                            color: "text.primary",
                        }}
                    ><FaMapMarkerAlt/>
                    </Box>
                    <Link
                        sx={{
                            textDecoration: 'none',
                            fontSize: '18px',
                            color: 'text.primary',
                            transition: "background-color 0.3s ease",
                            '&:hover': {
                                backgroundColor: 'action.shortArticleHover',
                            },
                        }}
                    >
                        Hradec Králové, Česká republika
                    </Link>
                </Box>
            </Box>
        </Box>
    );

};

export default Contact;