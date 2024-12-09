import {useState} from "react";
import Review from "./Review.jsx";
const RankMovies = (props) => {

    const getAverageReview = (revs) => {
        const total = revs.reduce((acc, score) => acc + score, 0);
        return (total / revs.length).toFixed(1);
    }

    const sortedMovies = [...props.moviesData].sort((a, b) => {
        const avgA = parseFloat(getAverageReview(a.reviews));
        const avgB = parseFloat(getAverageReview(b.reviews));
        return avgB - avgA;
    });

    const tableStyle = {
        border: '1px solid black',
        width: '100%',
        borderCollapse: 'collapse'
    };

    const cellStyle = {
        border: '1px solid black',
        padding: '5px'
    };

    return(
        <div className="rank-movies">
            <h2>Žebříček filmů</h2>

            <table style={tableStyle}>
                <thead>
                <tr>
                    <th style={cellStyle}>Pořadí</th>
                    <th style={cellStyle}>Plakát</th>
                    <th style={cellStyle}>Název</th>
                    <th style={cellStyle}>Informace</th>
                    <th style={cellStyle}>Ocenění</th>
                    <th style={cellStyle}>Hodnocení</th>
                    <th style={cellStyle}>...</th>
                </tr>
                </thead>
                <tbody>
                {sortedMovies.map((movie, index) => (
                    <tr key={movie.idMovie}>
                        <td style={cellStyle}>{index + 1}</td>
                        <td style={cellStyle}>
                            <img
                                src={movie.picture}
                                alt={movie.movieTitle}
                                style={{width: '100px'}}/>
                        </td>
                        <td style={cellStyle}>{movie.movieTitle}</td>
                        <td style={cellStyle}>
                            <strong>Year:</strong> {movie.yearOfRelease} <br/>
                            <strong>Režisér:</strong> {movie.director} <br/>
                            <strong>Scénárista:</strong> {movie.writer} <br/>
                            <strong>Žánr:</strong> {movie.genre.join(', ')} <br/>
                            <strong>Herci:</strong> {movie.actors.join(', ')} <br/>
                        </td>
                        <td style={cellStyle}>ocenění</td>
                        <td style={cellStyle}>{getAverageReview(movie.reviews)}</td>
                        <td style={cellStyle}>
                            <Review
                                revType="movies"
                                dataId={movie.idMovie}
                                data={props.moviesData}
                                setData={props.setMoviesData}
                            />
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

        </div>
    );

};

export default RankMovies;