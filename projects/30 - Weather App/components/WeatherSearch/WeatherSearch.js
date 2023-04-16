import { useState } from "react";

function WeatherSearch({ onSearch }) {
  const [cityName, setCityName] = useState("");

  function handleCityChange(event) {
    setCityName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSearch(cityName);
    setCityName("");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search"
        onChange={handleCityChange}
        value={cityName}
        required
      />
      <button>Search</button>
    </form>
  );
}

export default WeatherSearch;
