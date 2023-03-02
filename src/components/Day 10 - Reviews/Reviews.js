import data from "./data";
import { useState } from "react";
import classes from "./Reviews.module.css";

const Reviews = () => {
  const [reviews, setReviews] = useState(data);
  const [index, setIndex] = useState(0);

  const handleIncrement = () => {
    setIndex((prevIndex) => {
      return prevIndex === reviews.length - 1 ? 0 : prevIndex + 1;
    });
  };

  const handleDecrement = () => {
    setIndex((prevIndex) => {
      return prevIndex === 0 ? reviews.length - 1 : prevIndex - 1;
    });
  };

  return (
    <div className={classes.reviews}>
      <h1>Reviews</h1>
      <div className={classes.review}>
        <img
          className={classes["review__image"]}
          src={reviews[index].image}
          alt="Bill Anderson"
        />
        <h3>{reviews[index].name}</h3>
        <p>{reviews[index].job}</p>
        <p>{reviews[index].text}</p>
        <div>
          <button onClick={handleDecrement} style={{ marginRight: "1rem" }}>
            Previous
          </button>
          <button onClick={handleIncrement}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
