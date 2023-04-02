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
    <div>
      <h1>Reviews</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
            <th>Image</th>
            <th>Previous Button</th>
            <th>Next Button</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{reviews[index].name}</td>
            <td>{reviews[index].job}</td>
            <td>
              <img
                src={reviews[index].image}
                alt={reviews[index].name}
                style={{ width: "12rem", height: "8rem" }}
              />
            </td>
            <td>
              <button onClick={handleDecrement} style={{ marginRight: "1rem" }}>
                Previous
              </button>
            </td>
            <td>
              <button onClick={handleIncrement}>Next</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Reviews;
