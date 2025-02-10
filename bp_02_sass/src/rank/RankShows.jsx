import Review from "./Review.jsx";
import MoveUpButton from "../components/MoveUpButton.jsx";
import React from "react";

const RankShows = (props) => {

    const getAverageReview = (revs) => {
        const total = revs.reduce((acc, score) => acc + score, 0);
        return (total / revs.length).toFixed(1);
    };

    const sortedShows = [...props.showsData].sort((a, b) => {
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
        <div className="rank-shows">
            <MoveUpButton/>
            <h2>Žebříček seriálů</h2>

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
                {sortedShows.map((show, index) => (
                    <tr key={show.idMovie}>
                        <td style={cellStyle}>{index + 1}</td>
                        <td style={cellStyle}>
                            <img
                                src={show.picture}
                                alt={show.movieTitle}
                                style={{width: '100px'}}/>
                        </td>
                        <td style={cellStyle}>{show.movieTitle}</td>
                        <td style={cellStyle}>
                            <strong>Year:</strong> {show.yearOfRelease} <br/>
                            <strong>Režisér:</strong> {show.director} <br/>
                            <strong>Scénárista:</strong> {show.writer} <br/>
                            <strong>Žánr:</strong> {show.genre.join(', ')} <br/>
                            <strong>Herci:</strong> {show.actors.join(', ')} <br/>
                        </td>
                        <td style={cellStyle}>ocenění</td>
                        <td style={cellStyle}>{getAverageReview(show.reviews)}</td>
                        <td style={cellStyle}>
                            <Review
                                revType="shows"
                                dataId={show.idShow}
                                data={props.showsData}
                                setData={props.setShowsData}
                            />
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

        </div>
    );

};

export default RankShows;