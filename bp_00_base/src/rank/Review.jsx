import {useState} from "react";

const Review = (props) => {
    const [newReview, setNewReview] = useState();

    const handleChange = (event) => {
        const {name, value} = event.target;
        setNewReview((prevFormData) => ({...prevFormData, [name]: value}));
        console.log(newReview, props.movie);
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        const newReviewValue = {
            ...newReview,
        };
        console.log(newReviewValue);

        // add function to update movies and add new review
    };

    return(
        <div className="review">
            <form className="review-form" onSubmit={handleSubmit}>
                <label htmlFor="review">Hodnocení: </label>
                <input type="radio" id="one" name="review" value="1" onChange={handleChange}/>
                <label htmlFor="one">1</label>
                <input type="radio" id="two" name="review" value="2" onChange={handleChange}/>
                <label htmlFor="two">2</label>
                <input type="radio" id="three" name="review" value="3" onChange={handleChange}/>
                <label htmlFor="three">3</label>
                <input type="radio" id="four" name="review" value="4" onChange={handleChange}/>
                <label htmlFor="four">4</label>
                <input type="radio" id="five" name="review" value="5" onChange={handleChange}/>
                <label htmlFor="five">5</label>
                <input type="radio" id="six" name="review" value="6" onChange={handleChange}/>
                <label htmlFor="six">6</label>
                <input type="radio" id="seven" name="review" value="7" onChange={handleChange}/>
                <label htmlFor="seven">7</label>
                <input type="radio" id="eight" name="review" value="8" onChange={handleChange}/>
                <label htmlFor="eight">8</label>
                <input type="radio" id="nine" name="review" value="9" onChange={handleChange}/>
                <label htmlFor="nine">9</label>
                <input type="radio" id="ten" name="review" value="10" onChange={handleChange}/>
                <label htmlFor="ten">10</label>

                <button type="submit">Poslat</button>
            </form>
        </div>
    );

};

export default Review;