import Review from "./Review.jsx";
import MoveUpButton from "../components/MoveUpButton.jsx";
import {
    Box,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    useTheme
} from "@mui/material";

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
                margin: {
                    lg: "40px 150px",
                    md: "20px",
                    sm: "10px",
                    xs: "5px 0",
                },
                padding: {
                    lg: "10px auto",
                    md: "15px",
                    sm: "10px",
                    xs: "5px 0",
                },
                textAlign: "center",
            }}
        >
            <MoveUpButton/>
            <Typography variant="h5" sx={{
                marginBottom: 2,
                fontWeight: "bold"
            }}>
                Žebříček {props.isMovie ? "filmů" : "seriálů"}
            </Typography>

            <TableContainer
                component={Paper}
                sx={{
                    boxShadow: 3,
                    borderRadius: 2,
                    [theme.breakpoints.down('sm')]: {
                        width: "100%",
                    },
                }}>
                <Table>
                    <TableHead>
                        <TableRow sx={{
                            backgroundColor: "divider",
                            borderBottom: `2px solid ${theme.palette.text.primary}`,
                            [theme.breakpoints.down('md')]: {
                                display: "none",
                            },
                        }}>
                            <TableCell
                                sx={{padding: "8px 15px", textAlign: "center", fontWeight: "bold"}}>POŘADÍ</TableCell>
                            <TableCell
                                sx={{padding: "8px 15px", textAlign: "center", fontWeight: "bold"}}>PLAKÁT</TableCell>
                            <TableCell
                                sx={{padding: "8px 15px", textAlign: "center", fontWeight: "bold"}}>NÁZEV</TableCell>
                            <TableCell sx={{
                                padding: "8px 15px",
                                textAlign: "center",
                                fontWeight: "bold"
                            }}>INFORMACE</TableCell>
                            <TableCell
                                sx={{padding: "8px 15px", textAlign: "center", fontWeight: "bold"}}>OCENĚNÍ</TableCell>
                            <TableCell sx={{
                                padding: "8px 15px",
                                textAlign: "center",
                                fontWeight: "bold"
                            }}>HODNOCENÍ</TableCell>
                            <TableCell
                                sx={{padding: "8px 15px", textAlign: "center", fontWeight: "bold"}}>...</TableCell>
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
                                    [theme.breakpoints.down('md')]: {
                                        display: "grid",
                                        gridTemplateColumns: "1fr 1fr",
                                    },
                                    [theme.breakpoints.down('sm')]: {
                                        display: "block",
                                        padding: "10px 0",
                                        marginBottom: "20px",
                                        borderRadius: "10px",
                                    },
                                }}>
                                <TableCell sx={{
                                    textAlign: "center",
                                    padding: "12px",
                                    [theme.breakpoints.down('md')]: {
                                        textAlign: "center"
                                    },
                                    [theme.breakpoints.down('sm')]: {
                                        display: "flex",
                                        justifyContent: "space-between",
                                        padding: "8px",
                                    },
                                }}>{index + 1}</TableCell>
                                <TableCell sx={{
                                    textAlign: "center",
                                    padding: "12px",
                                    [theme.breakpoints.down('md')]: {
                                        textAlign: "center"
                                    },
                                    [theme.breakpoints.down('sm')]: {
                                        display: "flex",
                                        justifyContent: "space-between",
                                        padding: "8px",
                                        textAlign: "center"
                                    },
                                }}>
                                    <img src={movie.picture} alt={movie.movieTitle}
                                         style={{width: "80px", borderRadius: "5px"}}/>
                                </TableCell>
                                <TableCell sx={{
                                    textAlign: "center",
                                    padding: "12px",
                                    [theme.breakpoints.down('md')]: {
                                        textAlign: "center"
                                    },
                                    [theme.breakpoints.down('sm')]: {
                                        display: "flex",
                                        justifyContent: "space-between",
                                        padding: "8px",
                                    },
                                }}>{movie.movieTitle}</TableCell>
                                <TableCell sx={{
                                    padding: "12px",
                                    [theme.breakpoints.down('lg')]: {
                                        fontSize: "12px",
                                    },
                                    [theme.breakpoints.down('md')]: {
                                        textAlign: "left"
                                    },
                                    [theme.breakpoints.down('sm')]: {
                                        display: "flex",
                                        justifyContent: "space-between",
                                        padding: "8px",
                                        flexDirection: "column",
                                    },
                                }}>
                                    <strong>Rok vydání:</strong> {movie.yearOfRelease} <br/>
                                    <strong>Režisér:</strong> {movie.director} <br/>
                                    <strong>Scénárista:</strong> {movie.writer} <br/>
                                    <strong>Žánr:</strong> {movie.genre.join(", ")} <br/>
                                    <strong>Herci:</strong> {movie.actors.join(", ")}
                                </TableCell>
                                <TableCell sx={{
                                    textAlign: "center",
                                    padding: "12px",
                                    [theme.breakpoints.down('md')]: {
                                        textAlign: "center"
                                    },
                                    [theme.breakpoints.down('sm')]: {
                                        display: "flex",
                                        justifyContent: "space-between",
                                        padding: "8px",
                                    },
                                }}>N/A</TableCell>
                                <TableCell sx={{
                                    color: "error.main",
                                    fontWeight: "bold",
                                    textAlign: "center",
                                    padding: "12px",
                                    [theme.breakpoints.down('md')]: {
                                        textAlign: "center"
                                    },
                                    [theme.breakpoints.down('sm')]: {
                                        display: "flex",
                                        justifyContent: "space-between",
                                        padding: "8px",
                                    },
                                }}>{getAverageReview(movie.reviews)}</TableCell>
                                <TableCell sx={{
                                    textAlign: "center",
                                    padding: "12px",
                                    [theme.breakpoints.down('md')]: {
                                        textAlign: "center",
                                        width: "100%",
                                    },
                                    [theme.breakpoints.down('sm')]: {
                                        display: "flex",
                                        justifyContent: "space-between",
                                        padding: "8px",
                                    },
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