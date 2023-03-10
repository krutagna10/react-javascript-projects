import { useState, useEffect } from "react";

const url = "https://randomuser.me/api";

const UserGenerator = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);

    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("User not found");
      })
      .then((data) => {
        setUser(data.results[0]);
      })
      .catch((error) => {
        alert(`${error.name}: ${error.message}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = () => {
    fetchData();
  };

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  const { title, first: firstName, last: lastName } = user.name;
  const name = `${title} ${firstName} ${lastName}`;

  const { state, country } = user.location;

  return (
    <div style={{ display: "grid", placeItems: "center", gap: "1rem" }}>
      <h1 style={{ textAlign: "center" }}>User Generator</h1>
      <button onClick={handleClick}>Generate User</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Location</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{name}</td>
            <td>
              <img src={user.picture.large} alt={name} />
            </td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{`${state}, ${country}`}</td>
            <td>{user.gender}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserGenerator;
