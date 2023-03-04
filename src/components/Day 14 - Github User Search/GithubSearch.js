import React, { useEffect, useState } from "react";
const url = "https://api.github.com/users";

const GithubSearch = () => {
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
          <h1>Github User Search</h1>
          <table>
            <thead>
              <tr>
                <th>User Profile</th>
                <th>User Name</th>
                <th>Github Link</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img
                    src={user["avatar_url"]}
                    alt={user.name}
                    style={{
                      width: "5rem",
                      height: "5rem",
                    }}
                  />
                </td>
                <td>{searchTerm}</td>
                <td>
                  <a href={user["html_url"]}>{searchTerm}</a>
                </td>
              </tr>
            </tbody>
          </table>
        </React.Fragment>
      )}
    </div>
  );
};

export default GithubSearch;
