import { useState, useEffect } from "react";
import WeatherSearch from "./components/WeatherSearch/WeatherSearch";
import WeatherTable from "./components/WeatherTable/WeatherTable";

const key = "5e0eb43ecfa14cc9ea41028486ede9e1";

function WeatherApp() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData("vapi");
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

  function handleSearch(cityName) {
    fetchData(cityName);
  }

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1>Weather App</h1>
      <WeatherSearch onSearch={handleSearch} />
      <WeatherTable data={data} />
    </div>
  );
}

export default WeatherApp;
