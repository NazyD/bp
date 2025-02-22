import React from 'react';
import {Link} from 'react-router-dom';
import {Box, Typography, Button, useTheme} from "@mui/material";

const Navbar = (props) => {
    const theme = useTheme();

    return (
        <Box
            component="nav"
            sx={{
                width: '100%',
                height: '60px',
                backgroundColor: 'background.paper', // Theme-based background
                transition: 'background-color 0.5s ease, color 0.5s ease',
                borderBottom: '1px solid',
                borderBottomLeftRadius: '10px',
                borderBottomRightRadius: '10px',
                borderColor: 'divider', // Theme-based border color
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0 20px',
                position: 'relative',
                zIndex: 10,
                boxSizing: 'border-box',
                [theme.breakpoints.down('md')]: {
                    flexDirection: "column",
                    height: "auto",
                    gap: "10px"
                },
            }}
        >
            {/* Left Section */}
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    height: '100%',
                }}
            >
                <Typography
                    variant="h6"
                    component={Link}
                    to="/"
                    sx={{
                        textDecoration: 'none',
                        fontSize: '20px',
                        fontWeight: 'bold',
                        color: 'text.primary',
                        display: 'flex',
                        alignItems: 'center',
                        height: '100%',
                    }}
                >
                    MOVIE BLOG
                </Typography>
            </Box>

            {/* Center Section */}
            <Box
                sx={{
                    flex: 2,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                }}
            >
                <Box
                    component="ul"
                    sx={{
                        listStyle: 'none',
                        margin: 0,
                        padding: 0,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%',
                        [theme.breakpoints.down('md')]: {
                            flexDirection: "column",
                            height: "auto",
                            gap: "10px",
                        },
                    }}
                >
                    {/* Main Nav Item */}
                    <Box
                        component="li"
                        sx={{
                            position: 'relative',
                            margin: '0 20px',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            '&:hover .submenu': {
                                display: 'block', // Show submenu when hovering over parent
                                height: 'auto',
                            },
                        }}
                    >
                        <Typography
                            component={Link}
                            to="/articles-list"
                            sx={{
                                textDecoration: 'none',
                                fontSize: '16px',
                                color: 'text.primary',
                                padding: '0 10px',
                                height: '100%',
                                minWidth: '130px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: 'background.paper',
                                borderRadius: '5px',
                                '&:hover': {
                                    backgroundColor: 'action.hover',
                                },
                                transition: 'background-color 0.5s ease, color 0.5s ease',
                            }}
                        >
                            Seznam článků
                        </Typography>
                        {/* Submenu */}
                        <Box
                            component="ul"
                            sx={{
                                display: 'none',
                                position: 'absolute',
                                top: '100%',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                backgroundColor: 'background.paper',
                                border: '1px solid',
                                borderColor: 'divider',
                                borderRadius: '5px',
                                listStyle: 'none',
                                padding: 0,
                                zIndex: 20,
                                minWidth: '100%',
                                '& li': {
                                    height: '60px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    whiteSpace: 'nowrap',
                                    borderRadius: '5px',
                                    '&:hover': {
                                        backgroundColor: 'action.hover',
                                    },
                                },
                                '& li a': {
                                    textDecoration: 'none',
                                    color: 'text.primary',
                                    width: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'background-color 0.5s ease, color 0.5s ease',
                                },
                            }}
                            className="submenu"
                        >
                            <li>
                                <Typography
                                    component={Link}
                                    to="/articles-list/movies"
                                    sx={{
                                        height: "100%", // Ensure it covers the full li
                                    }}>
                                    Filmy
                                </Typography>
                            </li>
                            <li>
                                <Typography
                                    component={Link}
                                    to="/articles-list/shows"
                                    sx={{
                                        height: "100%", // Ensure it covers the full li
                                    }}>
                                    Seriály
                                </Typography>
                            </li>
                        </Box>
                    </Box>
                    <Box
                        component="li"
                        sx={{
                            position: 'relative',
                            margin: '0 20px',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            '&:hover .submenu': {
                                display: 'block', // Show submenu when hovering over parent
                                height: 'auto',
                            },
                        }}
                    >
                        <Typography
                            component={Link}
                            to="/ranking"
                            sx={{
                                textDecoration: 'none',
                                fontSize: '16px',
                                color: 'text.primary',
                                padding: '0 10px',
                                height: '100%',
                                minWidth: '130px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: 'background.paper',
                                borderRadius: '5px',
                                '&:hover': {
                                    backgroundColor: 'action.hover',
                                },
                                transition: 'background-color 0.5s ease, color 0.5s ease',
                            }}
                        >
                            Žebříčky
                        </Typography>
                        {/* Submenu */}
                        <Box
                            component="ul"
                            sx={{
                                display: 'none',
                                position: 'absolute',
                                top: '100%',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                backgroundColor: 'background.paper',
                                border: '1px solid',
                                borderColor: 'divider',
                                borderRadius: '5px',
                                listStyle: 'none',
                                padding: 0,
                                zIndex: 20,
                                minWidth: '100%',
                                '& li': {
                                    height: '60px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    whiteSpace: 'nowrap',
                                    borderRadius: '5px',
                                    '&:hover': {
                                        backgroundColor: 'action.hover',
                                    },
                                },
                                '& li a': {
                                    textDecoration: 'none',
                                    color: 'text.primary',
                                    width: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'background-color 0.5s ease, color 0.5s ease',
                                },
                            }}
                            className="submenu"
                        >
                            <li>
                                <Typography
                                    component={Link}
                                    to="/ranking/movies"
                                    sx={{
                                        height: "100%", // Ensure it covers the full li
                                    }}>
                                    Top filmy
                                </Typography>
                            </li>
                            <li>
                                <Typography
                                    component={Link}
                                    to="/ranking/shows"
                                    sx={{
                                        height: "100%", // Ensure it covers the full li
                                    }}>
                                    Top seriály
                                </Typography>
                            </li>
                        </Box>
                    </Box>
                    <Box
                        component="li"
                        sx={{
                            position: 'relative',
                            margin: '0 20px',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            '&:hover .submenu': {
                                display: 'block', // Show submenu when hovering over parent
                                height: 'auto',
                            },
                        }}
                    >
                        <Typography
                            component={Link}
                            to="/contact"
                            sx={{
                                textDecoration: 'none',
                                fontSize: '16px',
                                color: 'text.primary',
                                padding: '0 10px',
                                height: '100%',
                                minWidth: '130px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: 'background.paper',
                                borderRadius: '5px',
                                '&:hover': {
                                    backgroundColor: 'action.hover',
                                },
                                transition: 'background-color 0.5s ease, color 0.5s ease',
                            }}
                        >
                            Kontakty
                        </Typography>
                    </Box>
                </Box>
            </Box>

            {/* Right Section */
            }
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    height: '100%',
                }}
            >
                <Button
                    variant="outlined"
                    onClick={props.toggleTheme}
                    sx={{
                        height: '28px',
                        fontFamily: 'Arial, sans-serif',
                        fontSize: '13px',
                        padding: '5px 10px',
                        border: '1px solid',
                        borderColor: 'divider',
                        backgroundColor: 'primary.main',
                        color: 'text.primary',
                        cursor: 'pointer',
                        borderRadius: '5px',
                        textTransform: 'none',
                        '&:hover': {
                            backgroundColor: 'action.hover',
                        },
                        transition: 'background-color 0.5s ease, color 0.5s ease',
                    }}
                >
                    {props.theme === 'light' ? 'Temný motiv' : 'Světlý motiv'}
                </Button>
            </Box>
        </Box>
    )
        ;

};

export default Navbar;