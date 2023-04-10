import { useState, useEffect } from "react";
import GithubUserList from "./components/GithubUserList/GithubUserList";
const url = "https://api.github.com/users";

function GithubListApp() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Data not found");
      }

      const data = await response.json();
      setUsers(data);
      console.log(data);
    } catch (error) {
      alert(`${error.name}: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  }

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1>Github User List</h1>
      <GithubUserList users={users} />
    </div>
  );
}

export default GithubListApp;
