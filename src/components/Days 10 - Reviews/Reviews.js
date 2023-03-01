import data from "./data";
import { useState } from "react";

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
    <div
      style={{
        textAlign: "center",
        border: "1px solid black",
        padding: "1rem",
      }}
    >
      <h1>Reviews</h1>
      <div
        className="review"
        style={{
          maxWidth: "25rem",
          textAlign: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <img
          src={reviews[index].image}
          alt="Bill Anderson"
          style={{
            width: "10rem",
            height: "9rem",
            border: "1px solid black",
            borderRadius: "50%",
          }}
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
