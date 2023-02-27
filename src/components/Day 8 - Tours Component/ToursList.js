import React, { useState } from "react";

const ToursItem = ({ id, index, name, info, price, onDelete }) => {
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
      <td>{index}</td>
      <td>{name}</td>
      <td>
        <span>{isTextVisible ? info : `${info.slice(0, 100)}...`}</span>
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
          <th>Index</th>
          <th>Tour Name</th>
          <th>Tour Description</th>
          <th>Tour Price</th>
          <th>Not Interested Button</th>
        </tr>
      </thead>
      <tbody>
        {tours.map((tour, index) => (
          <ToursItem
            key={tour.id}
            index={index}
            {...tour}
            onDelete={onDeleteTour}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ToursList;
