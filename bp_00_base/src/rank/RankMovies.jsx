import moviesData from '../data/movies.json';
const RankMovies = (props) => {

    console.log(props.moviesData, moviesData);

    const getAverageReview = (revs) => {
        const total = revs.reduce((acc, score) => acc + score, 0);
        console.log(total, (total / revs.length).toFixed(1));
        return (total / revs.length).toFixed(1);
    }

    return(
        <div className="rank-movies">
            <h2>Žebříček filmů</h2>

            <table>
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
                {moviesData.map((movie, index) => (
                    <tr key={movie.idMovie}>
                        <td>poradi</td>
                        <td>
                            <img
                                src={movie.picture}
                                alt={movie.movieTitle}
                                style={{width: '100px'}}/>
                        </td>
                        <td>{movie.movieTitle}</td>
                        <td>informace</td>
                        <td>ocenění</td>
                        <td>{getAverageReview(movie.reviews)}</td>
                        <td>přidat tlačítko pro přidání hodnocení</td>
                    </tr>
                ))}
                </tbody>
            </table>

        </div>
    );

};

export default RankMovies;