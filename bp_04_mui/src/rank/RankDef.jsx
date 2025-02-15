import Review from "./Review.jsx";
import MoveUpButton from "../components/MoveUpButton.jsx";
import {Box,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    useTheme} from "@mui/material";

const RankDef = (props) => {
    const theme = useTheme();

    const getAverageReview = (revs) => {
        const total = revs.reduce((acc, score) => acc + score, 0);
        return (total / revs.length).toFixed(1);
    }

    const sortedData = [...props.rankingData].sort((a, b) => {
        const avgA = parseFloat(getAverageReview(a.reviews));
        const avgB = parseFloat(getAverageReview(b.reviews));
        return avgB - avgA;
    });


    return (
        <Box
            sx={{
                margin: "40px 150px",
                textAlign: "center",
            }}
        >
            <MoveUpButton/>
            <Typography variant="h5" sx={{
                marginBottom: 2,
                fontWeight: "bold"}}>
                Žebříček filmů
            </Typography>

            <TableContainer
                component={Paper}
                sx={{boxShadow: 3,
                    borderRadius: 2}}>
                <Table>
                    <TableHead>
                        <TableRow sx={{
                            backgroundColor: "divider",
                            borderBottom: `2px solid ${theme.palette.text.primary}`}}>
                            <TableCell sx={{padding: "8px 15px",textAlign: "center", fontWeight: "bold"}}>POŘADÍ</TableCell>
                            <TableCell sx={{padding: "8px 15px",textAlign: "center", fontWeight: "bold"}}>PLAKÁT</TableCell>
                            <TableCell sx={{padding: "8px 15px",textAlign: "center", fontWeight: "bold"}}>NÁZEV</TableCell>
                            <TableCell sx={{padding: "8px 15px",textAlign: "center", fontWeight: "bold"}}>INFORMACE</TableCell>
                            <TableCell sx={{padding: "8px 15px",textAlign: "center", fontWeight: "bold"}}>OCENĚNÍ</TableCell>
                            <TableCell sx={{padding: "8px 15px",textAlign: "center", fontWeight: "bold"}}>HODNOCENÍ</TableCell>
                            <TableCell sx={{padding: "8px 15px",textAlign: "center", fontWeight: "bold"}}>...</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sortedData.map((movie, index) => (
                            <TableRow
                                key={movie.id}
                                sx={{
                                    backgroundColor: index % 2 === 0 ? "background.paper" : "action.hover",
                                    '&:hover': {
                                        backgroundColor: 'divider',
                                    },
                                }}>
                                <TableCell sx={{
                                    textAlign: "center",
                                    padding: "12px"
                                }}>{index + 1}</TableCell>
                                <TableCell sx={{
                                    textAlign: "center",
                                    padding: "12px"
                                }}>
                                    <img src={movie.picture} alt={movie.movieTitle}
                                         style={{width: "80px", borderRadius: "5px"}}/>
                                </TableCell>
                                <TableCell sx={{
                                    textAlign: "center",
                                    padding: "12px"
                                }}>{movie.movieTitle}</TableCell>
                                <TableCell sx={{
                                    padding: "12px"
                                }}>
                                    <strong>Rok vydání:</strong> {movie.yearOfRelease} <br />
                                    <strong>Režisér:</strong> {movie.director} <br />
                                    <strong>Scénárista:</strong> {movie.writer} <br />
                                    <strong>Žánr:</strong> {movie.genre.join(", ")} <br />
                                    <strong>Herci:</strong> {movie.actors.join(", ")}
                                </TableCell>
                                <TableCell sx={{
                                    textAlign: "center",
                                    padding: "12px"
                                }}>N/A</TableCell>
                                <TableCell sx={{
                                    color: "error.main",
                                    fontWeight: "bold",
                                    textAlign: "center",
                                    padding: "12px"
                                }}>{getAverageReview(movie.reviews)}</TableCell>
                                <TableCell sx={{
                                    textAlign: "center",
                                    padding: "12px"
                                }}>
                                    <Review revType="movies" dataId={movie.id}/>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );

};

export default RankDef;