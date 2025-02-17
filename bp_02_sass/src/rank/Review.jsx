import {useState} from "react";
import '../styles/styles.scss';

const Review = (props) => {
    const [selectedReview, setSelectedReview] = useState(5);
    const [visibleReview, setVisibleReview] = useState(null);

    const isFormOpen = visibleReview === props.dataId;

    const handleAddReview = (movieId, review) => {
        const updatedMovies = props.data.map(movie => {
            if(movie.id === movieId) {
                const updatedReviews = [...movie.reviews, review];
                return {...movie, reviews: updatedReviews};
            }
            return movie;
        });

        props.setData(updatedMovies);
        localStorage.setItem(`${props.revType}.json`, JSON.stringify(updatedMovies));
    };
    const handleSubmit = () => {
        if(selectedReview !== null) {
            handleAddReview(props.dataId, selectedReview);
            setVisibleReview(null);
            setSelectedReview(5);
        }
    };

    return(
        <>
            {isFormOpen ? (
                <tr className="review-expanded">
                    <td colSpan={5} className="review-form-container">
                        <h5>Hodnocení</h5>

                        <div className="review-action">
                            <input
                                type="range"
                                min="1"
                                max="10"
                                value={selectedReview}
                                onChange={(e) => setSelectedReview(Number(e.target.value))}
                                className="review-slider"
                            />
                            <span className="review-score">{selectedReview}</span>
                        </div>

                        <div className="review-buttons">
                            <button className="submit-btn" onClick={handleSubmit}>Poslat</button>
                            <button className="cancel-btn" onClick={() => setVisibleReview(null)}>Storno</button>
                        </div>
                    </td>
                </tr>
            ) : (
                <td className="review-button-cell">
                    <button className="review-button" onClick={() => setVisibleReview(props.dataId)}>
                        Ohodnotit
                    </button>
                </td>
            )}
        </>
    );

};

export default Review;