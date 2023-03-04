import User from "./User";
import Search from "./Search";
import React, { useEffect, useState } from "react";
const url = "https://api.github.com/users";

const SearchApp = () => {
  const [user, setUser] = useState({});
  const [searchTerm, setSearchTerm] = useState("krutagna10");
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = () => {
    fetch(`${url}/${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUser(data);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="user-search">
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <React.Fragment>
          <h1 style={{ textAlign: "center" }}>Github User Search</h1>
          <Search />
          <User user={user} searchTerm={searchTerm} />
        </React.Fragment>
      )}
    </div>
  );
};

export default SearchApp;
