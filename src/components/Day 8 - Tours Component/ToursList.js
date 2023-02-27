import React, { useState } from "react";

const ToursItem = ({ id, name, info, price, onDelete }) => {
  const style = {
    background: "transparent",
    border: "none",
    color: "#551A8B",
    textDecoration: "underline",
  };

  const [isTextVisible, setIsTextVisible] = useState(false);

  const handleClick = () => {
    setIsTextVisible((prevIsTextVisible) => !prevIsTextVisible);
  };

  return (
    <tr>
      <td>{name}</td>
      <td>
        <span>{isTextVisible ? info : info.slice(0, 100)}</span>
        <button style={style} onClick={handleClick}>
          {isTextVisible ? "Show less" : "Read more"}
        </button>
      </td>
      <td>${price}</td>
      <td>
        <button
          onClick={() => {
            onDelete(id);
          }}
        >
          Not Interested
        </button>
      </td>
    </tr>
  );
};

const ToursList = ({ tours, onDeleteTour }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Tour Name</th>
          <th>Tour Description</th>
          <th>Tour Price</th>
          <th>Not Interested Button</th>
        </tr>
      </thead>
      <tbody>
        {tours.length === 0 ? (
          <tr>
            <td colSpan="4">No Tours found</td>
          </tr>
        ) : (
          <React.Fragment>
            {tours.map((tour) => (
              <ToursItem key={tour.id} {...tour} onDelete={onDeleteTour} />
            ))}
          </React.Fragment>
        )}
      </tbody>
    </table>
  );
};

export default ToursList;
