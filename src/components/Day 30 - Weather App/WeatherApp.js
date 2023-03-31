import { useState, useEffect } from "react";

const url = "https://api.openweathermap.org/data/2.5/weather";
const key = "6c0bc0f5b804009fa50fdc3fc2936835";

const WeatherApp = () => {
  const [data, setData] = useState([]);

  let cityName = "london";

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={${key}}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  }

  return (
    <div>
      <h1>Weather App</h1>
      <form className="form">
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </form>
    </div>
  );
};

export default WeatherApp;
