import Review from "./Review.jsx";
import MoveUpButton from "../components/MoveUpButton.jsx";
import '../styles/styles.scss';

const RankDef = (props) => {

    const getAverageReview = (revs) => {
        const total = revs.reduce((acc, score) => acc + score, 0);
        return (total / revs.length).toFixed(1);
    }

    const sortedData = [...props.rankingData].sort((a, b) => {
        const avgA = parseFloat(getAverageReview(a.reviews));
        const avgB = parseFloat(getAverageReview(b.reviews));
        return avgB - avgA;
    });

    return(
        <div className="rank-movies">
            <MoveUpButton/>
            <h2>Žebříček filmů</h2>

            <table className="rank-table">
                <thead>
                <tr>
                    <th>Pořadí</th>
                    <th>Plakát</th>
                    <th>Název</th>
                    <th>Informace</th>
                    <th>Ocenění</th>
                    <th>Hodnocení</th>
                    <th>...</th>
                </tr>
                </thead>
                <tbody>
                {sortedData.map((movie, index) => (
                    <tr key={movie.id}>
                        <td>{index + 1}</td>
                        <td>
                            <img
                                src={movie.picture}
                                alt={movie.movieTitle}
                                style={{width: '100px'}}/>
                        </td>
                        <td>{movie.movieTitle}</td>
                        <td>
                            <strong>Rok vydání:</strong> {movie.yearOfRelease} <br/>
                            <strong>Režisér:</strong> {movie.director} <br/>
                            <strong>Scénárista:</strong> {movie.writer} <br/>
                            <strong>Žánr:</strong> {movie.genre.join(', ')} <br/>
                            <strong>Herci:</strong> {movie.actors.join(', ')} <br/>
                        </td>
                        <td>N/A</td>
                        <td>{getAverageReview(movie.reviews)}</td>
                        <td>
                            <Review
                                revType="movies"
                                dataId={movie.id}
                                data={props.rankingData}
                                setData={props.setRankingData}
                            />
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

        </div>
    );

};

export default RankDef;