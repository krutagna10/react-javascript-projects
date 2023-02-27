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

  const handleFetchTours = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setTours(data);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    handleFetchTours();
  }, []);

  const handleDeleteTour = (deleteId) => {
    setTours((prevTours) => {
      const updatedTours = prevTours.filter((tour) => {
        return deleteId !== tour.id;
      });
      return updatedTours;
    });
  };

  const style = {
    display: "grid",
    placeItems: "center",
    maxWidth: "50rem",
  };

  return (
    <div className="tours-app" style={style}>
      {isLoading ? (
        <Loading />
      ) : (
        <React.Fragment>
          <h1 style={{ textAlign: "center" }}>
            {tours.length === 0 ? "No Tours Left" : "Our Tours"}
          </h1>
          {tours.length === 0 ? (
            <div>
              <button onClick={handleFetchTours}>Refresh Tours</button>
            </div>
          ) : (
            <ToursList tours={tours} onDeleteTour={handleDeleteTour} />
          )}
        </React.Fragment>
      )}
    </div>
  );
};

export default TourApp;
