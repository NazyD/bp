import {useState} from "react";

const Review = (props) => {
    const [selectedReview, setSelectedReview] = useState(null);
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
            setSelectedReview(null);
        }
    };

    return(
        <div className="review">
            {isFormOpen ? <form className="review-form" onSubmit={handleSubmit}>
                    {[...Array(10)].map((_, i) => (
                        <label key={i}>
                            <input type="radio"
                                   value={i + 1}
                                   checked={selectedReview === i + 1}
                                   onChange={() => setSelectedReview(i + 1)}
                            />
                            {i + 1}
                        </label>
                    ))}

                    <button onClick={handleSubmit}>Poslat</button>
                    <button onClick={() => setVisibleReview(null)}>Storno</button>
                </form> :
                <button className="review-show-button" onClick={() => setVisibleReview(props.dataId)}
                        >ohodnotit</button>}
        </div>
    );

};

export default Review;