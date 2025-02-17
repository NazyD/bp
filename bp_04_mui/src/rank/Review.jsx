import { useState } from "react";
import { TableCell, TableRow, Button, Slider, Typography, Box } from "@mui/material";

const Review = (props) => {
    const [selectedReview, setSelectedReview] = useState(5);
    const [visibleReview, setVisibleReview] = useState(null);

    const isFormOpen = visibleReview === props.dataId;

    const handleAddReview = (movieId, review) => {
        const updatedMovies = props.data.map((movie) => {
            if (movie.id === movieId) {
                const updatedReviews = [...movie.reviews, review];
                return { ...movie, reviews: updatedReviews };
            }
            return movie;
        });

        props.setData(updatedMovies);
        localStorage.setItem(`${props.revType}.json`, JSON.stringify(updatedMovies));
    };

    const handleSubmit = () => {
        if (selectedReview !== null) {
            handleAddReview(props.dataId, selectedReview);
            setVisibleReview(null);
            setSelectedReview(5);
        }
    };

    return (
        <>
            {isFormOpen ? (
                <TableRow>
                    <TableCell
                        colSpan={5}
                        sx={{
                            textAlign: "center",
                            backgroundColor: "background.shortArticle",
                            padding: "5px",
                            borderRadius: "5px",
                            transition: "background-color 0.5s ease, color 0.5s ease",
                            border: "none",
                        }}
                    >
                        <Typography variant="h6"
                                    sx={{
                                        margin: "5px",
                                        fontWeight: "bold",
                                        color: "text.primary",
                                    }}>
                            Hodnocení
                        </Typography>


                        <Box display="flex"
                             alignItems="center"
                             justifyContent="center" gap={2}>
                            <Slider
                                min={1}
                                max={10}
                                value={selectedReview}
                                onChange={(e, newValue) => setSelectedReview(newValue)}
                                sx={{
                                    width: "60%",
                                    "& .MuiSlider-thumb": {
                                        width: "16px",
                                        height: "16px",
                                        color: "#0075ff",
                                    },
                                    "& .MuiSlider-track": {
                                        height: "7px",
                                        color: "#0075ff",
                                    },
                                    "& .MuiSlider-rail": {
                                        height: "7px",
                                        backgroundColor: "#efefef",
                                    },
                                }}
                            />
                            <Typography
                                variant="body1"
                                fontWeight="bold"
                                sx={{ color: "text.primary", fontSize: "16px" }}
                            >
                                {selectedReview}
                            </Typography>
                        </Box>

                        <Box display="flex" justifyContent="center" gap={2} mt={1}>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: "success.main",
                                    color: "text.primary",
                                    borderRadius: "5px",
                                    padding: "3px 12px",
                                    textTransform: "none",
                                    "&:hover": {
                                        backgroundColor: "#4cae4c",
                                    },
                                }}
                                onClick={handleSubmit}
                            >
                                Poslat
                            </Button>

                            <Button
                                variant="outlined"
                                sx={{
                                    backgroundColor: "#d9534f",
                                    color: "text.primary",
                                    borderRadius: "5px",
                                    padding: "3px 12px",
                                    textTransform: "none",
                                    "&:hover": {
                                        backgroundColor: "#c9302c",
                                    },
                                }}
                                onClick={() => setVisibleReview(null)}
                            >
                                Storno
                            </Button>
                        </Box>
                    </TableCell>
                </TableRow>
            ) : (
                <TableCell align="center" sx={{ border: "none", padding: "10px" }}>
                    <Button
                        variant="outlined"
                        sx={{
                            textTransform: "none",
                            textDecoration: "none",
                            fontSize: "13px",
                            backgroundColor: "background.default",
                            color: "text.primary",
                            border: "1px solid",
                            borderColor: "divider",
                            borderRadius: "5px",
                            padding: "3px 12px",
                        }}
                        onClick={() => setVisibleReview(props.dataId)}
                    >
                        Ohodnotit
                    </Button>
                </TableCell>
            )}
        </>
    );
};

export default Review;
