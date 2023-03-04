import User from "./User";
import Search from "./Search";
import React, { useEffect, useState } from "react";
const url = "https://api.github.com";

const SearchApp = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = (inputSearchTerm) => {
    console.log(inputSearchTerm);
    setIsLoading(true);
    fetch(`https://api.github.com/users/${inputSearchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUser(data);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchData("krutagna10");
  }, []);

  const handleSubmit = (inputSearchTerm) => {
    fetchData(inputSearchTerm);
  };

  return (
    <div className="user-search">
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <React.Fragment>
          <h1 style={{ textAlign: "center" }}>Github User Search</h1>
          <Search onSubmit={handleSubmit} />
          <User user={user} />
        </React.Fragment>
      )}
    </div>
  );
};

export default SearchApp;
