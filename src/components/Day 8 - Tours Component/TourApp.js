import { useState, useEffect } from "react";
import ToursList from "./ToursList";
import React from "react";

const url = "https://course-api.com/react-tours-project";

const Loading = () => {
  return <h1>Loading...</h1>;
};

const TourApp = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setTours(data);
        setIsLoading(false);
      });
  }, []);

  const handleDeleteTour = (deleteId) => {
    setTours((prevTours) => {
      const updatedTours = prevTours.filter((tour) => {
        return deleteId !== tour.id;
      });
      return updatedTours;
    });
  };

  return (
    <div className="tours-app">
      {isLoading ? (
        <Loading />
      ) : (
        <React.Fragment>
          <h1 style={{ textAlign: "center" }}>Our Tours</h1>
          <ToursList tours={tours} onDeleteTour={handleDeleteTour} />
        </React.Fragment>
      )}
    </div>
  );
};

export default TourApp;
