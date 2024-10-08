import showsData from "../data/shows.json";

const RankShows = (props) => {

    console.log(props.showsData);
    const getAverageReview = (revs) => {
        const total = revs.reduce((acc, score) => acc + score, 0);
        return (total / revs.length).toFixed(1);
    }

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
                {props.showsData.map((show, index) => (
                    <tr key={show.idMovie}>
                        <td style={cellStyle}>poradi</td>
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
                        <td style={cellStyle}>přidat tlačítko pro přidání hodnocení</td>
                    </tr>
                ))}
                </tbody>
            </table>

        </div>
    );

};

export default RankShows;