import { useState, useEffect } from "react";

const FetchPractice = () => {
  const fetchData = () => {
    fetch("https://api.github.com/users/krutagna10")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("User not found");
      })
      .then((data) => console.log(data))
      .catch((error) => {
        console.log(`${error.name}: ${error.message}`);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <p>Fetch Practice</p>
    </div>
  );
};

export default FetchPractice;
