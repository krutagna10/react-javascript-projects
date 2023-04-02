import { useState, useEffect } from "react";

const url = "https://api.openweathermap.org/data/2.5/weather";
const key = "5e0eb43ecfa14cc9ea41028486ede9e1";

const WeatherApp = () => {
  const [data, setData] = useState({});
  const [city, setCity] = useState("Vapi");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData(city);
  }, []);

  function fetchData(cityName) {
    setIsLoading(true);

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("City not found");
      })
      .then((data) => setData(data))
      .catch((error) => alert(`${error.name}: ${error.message}`))
      .finally(() => setIsLoading(false));
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    fetchData(city);
  }

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1>Weather App</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Search" onChange={handleCityChange} />
        <button>Search</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Location</th>
            <th>Temperature</th>
            <th>Weather</th>
            <th>Wind Speed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.name}</td>
            <td>{data.main.temp}&#8451;</td>
            <td>{data.weather[0].main}</td>
            <td>{data.wind.speed} m/s</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WeatherApp;
