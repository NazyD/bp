import { useState } from "react";
import styled from "@emotion/styled";

const ReviewContainer = styled.tr`
    td, tr {
        padding: 5px !important;
        border: none !important;
    }
`;

const ReviewFormContainer = styled.td`
    padding: 5px;
    text-align: center;
    background-color: ${({ theme }) => theme.shortArticleBg};
    border-radius: 5px;
`;

const ReviewTitle = styled.h5`
    margin: 5px;
    font-size: 18px;
    color: ${({ theme }) => theme.textColor};
`;

const ReviewAction = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const ReviewSlider = styled.input`
    width: 60%;
    margin: 5px auto;
    display: block;
`;

const ReviewScore = styled.span`
    font-size: 15px;
    font-weight: bold;
    margin: 5px auto;
    color: ${({ theme }) => theme.textColor};
`;

const ReviewButtons = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;
`;

const SubmitButton = styled.button`
    background-color: #5cb85c;
    color: white;
    border: none;
    padding: 8px 15px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #4cae4c;
    }
`;

const CancelButton = styled.button`
    background-color: #d9534f;
    color: white;
    border: none;
    padding: 8px 15px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #c9302c;
    }
`;

const ReviewButtonCell = styled.td`
    text-align: center;
    border: none !important;
`;

const ReviewButton = styled.button`
    padding: 6px 12px;
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.textColor};
    border: 1px solid ${({ theme }) => theme.borderColor};
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
`;

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
                <ReviewContainer>
                    <ReviewFormContainer colSpan={5}>
                        <ReviewTitle>Hodnocení</ReviewTitle>

                        <ReviewAction>
                            <ReviewSlider
                                type="range"
                                min="1"
                                max="10"
                                value={selectedReview}
                                onChange={(e) => setSelectedReview(Number(e.target.value))}
                            />
                            <ReviewScore>{selectedReview}</ReviewScore>
                        </ReviewAction>

                        <ReviewButtons>
                            <SubmitButton onClick={handleSubmit}>Poslat</SubmitButton>
                            <CancelButton onClick={() => setVisibleReview(null)}>Storno</CancelButton>
                        </ReviewButtons>
                    </ReviewFormContainer>
                </ReviewContainer>
            ) : (
                <ReviewButtonCell>
                    <ReviewButton onClick={() => setVisibleReview(props.dataId)}>
                        Ohodnotit
                    </ReviewButton>
                </ReviewButtonCell>
            )}
        </>
    );
};

export default Review;
