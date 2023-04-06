import { useState, useEffect } from "react";

const url = "https://api.chucknorris.io/jokes/random";

function JokesFetcher() {
  const [joke, setJoke] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchJoke();
  }, []);

  async function fetchJoke() {
    setIsLoading(true);

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Data not found");
      }
      const data = await response.json();
      setJoke(data);
    } catch (error) {
      alert(`${error.name}: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  }

  function handleClick() {
    fetchJoke();
  }

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1>Jokes Fetcher App</h1>
      <table style={{ width: "36rem" }}>
        <thead>
          <tr>
            <th>Joke</th>
            <th>Fetch Joke Button</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{joke.value}</td>
            <td>
              <button onClick={handleClick}>Generate Joke</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default JokesFetcher;
