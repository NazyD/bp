import React from "react";
import {Box, Typography} from "@mui/material";
import {keyframes} from "@mui/system";

const slideUpFade = keyframes`
    0% {
        opacity: 0;
        transform: translateY(30px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

const fadeIn = keyframes`
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

const slideDown = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-100%);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

const Home = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Box
                sx={{
                    width: "79%",
                    marginTop: "30px",
                    backgroundColor: "background.paper", // Dynamic theme-based color
                    transition: "background-color 0.5s ease, color 0.5s ease",
                    borderTop: "1px solid",
                    borderBottom: "1px solid",
                    borderColor: "divider",
                    borderRadius: "5px",
                    padding: "80px",
                    boxSizing: "border-box",
                    textAlign: "center",
                    position: "relative",
                    zIndex: "999",
                }}
            >
                <Typography
                    variant="h1"
                    component="h1"
                    sx={{
                        fontSize: "36px",
                        fontWeight: 'bold',
                        margin: "0 0 20px",
                        color: "text.primary", // Dynamic theme-based text color
                        opacity: 0, // Initial opacity for animation
                        transform: "translateY(30px)", // Start position
                        animation: `${slideUpFade} 1s ease forwards`, // Apply animation
                    }}
                >
                    Vítejte
                </Typography>
                <Typography
                    variant="body1"
                    component="p"
                    sx={{
                        fontSize: "18px",
                        margin: 0,
                        color: "text.primary", // Dynamic theme-based text color
                        opacity: 0, // Initial opacity for animation
                        transform: "translateY(20px)", // Start position
                        animation: `${fadeIn} 1s ease 0.5s forwards`, // Apply animation with delay
                    }}
                >
                    Stránka obsahuje články o novinkách z filmového a seriálového světa.
                </Typography>
            </Box>
            <Box
                sx={{
                    fontSize: "16px",
                    width: "60%",
                    backgroundColor: "action.hover",
                    padding: "15px",
                    textAlign: "center",
                    borderBottomLeftRadius: "5px",
                    borderBottomRightRadius: "5px",
                    opacity: "0",
                    transform: "translateY(-100%)",
                    animation: `${slideDown} 1s ease-out 1s forwards`,
                    zIndex: 1,
                }}
                >
                <Typography
                    variant="body1"
                    component="p"
                    sx={{
                        fontSize: "16px",
                        margin: 0,
                        color: "text.primary", // Dynamic theme-based text color
                        opacity: 0, // Initial opacity for animation
                        transform: "translateY(20px)", // Start position
                        animation: `${fadeIn} 1s ease 0.5s forwards`, // Apply animation with delay
                    }}
                >
                    Stránka obsahuje články o novinkách z filmového a seriálového světa.
                </Typography>
            </Box>
        </Box>
    );


};

export default Home;