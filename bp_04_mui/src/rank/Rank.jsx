import {Link} from "react-router-dom";
import React from "react";
import {Box, Typography, Button} from "@mui/material";

const Rank = () => {

    return (
        <Box
            sx={{
                width: "100%",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                backgroundColor: "background.default",
                padding: "40px",
                borderRadius: "10px",
            }}
        >
            {/* Title */}
            <Typography
                variant="h5"
                sx={{
                    color: "text.primary",
                    fontWeight: "bold",
                    marginBottom: "30px",
                }}
            >
                Vyberte si žebříček:
            </Typography>

            {/* Links Container */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    alignItems: "center",
                }}
            >
                {/* Movie Ranking */}
                <Button
                    variant="outlined"
                    component={Link}
                    to="/ranking/movies"
                    sx={{
                        textDecoration: "none",
                        fontSize: "20px",
                        fontWeight: "bold",
                        padding: "6px 14px",
                        color: "text.primary",
                        backgroundColor: "background.paper",
                        borderRadius: "10px",
                        transition: "background-color 0.3s ease, transform 0.2s ease",
                        textTransform: 'none',
                        "&:hover": {
                            backgroundColor: "action.hover",
                            transform: "scale(1.1)",
                        },
                    }}
                >
                    Žebříček filmů
                </Button>

                {/* Show Ranking */}
                <Button
                    variant="outlined"
                    component={Link}
                    to="/ranking/shows"
                    sx={{
                        textDecoration: "none",
                        fontSize: "20px",
                        fontWeight: "bold",
                        padding: "6px 14px",
                        color: "text.primary",
                        backgroundColor: "background.paper",
                        borderRadius: "10px",
                        transition: "background-color 0.3s ease, transform 0.2s ease",
                        textTransform: 'none',
                        "&:hover": {
                            backgroundColor: "action.hover",
                            transform: "scale(1.1)",
                        },
                    }}
                >
                    Žebříček seriálů
                </Button>
            </Box>
        </Box>
    );

};

export default Rank;