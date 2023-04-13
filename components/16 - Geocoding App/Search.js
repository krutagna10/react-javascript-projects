import { useState } from "react";

const Search = ({ onSearchCountry }) => {
  const [values, setValues] = useState({ latitude: "", longitude: "" });

  const handleLatitudeChange = (event) => {
    setValues({ ...values, latitude: event.target.value });
  };

  const handleLongitudeChange = (event) => {
    setValues({ ...values, longitude: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearchCountry({ ...values });
    setValues({ ...values, latitude: "", longitude: "" });
  };

  return (
    <form style={{ display: "flex", gap: "0.5rem" }} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter latitude"
        style={{
          width: "100%",
          padding: "0.5rem",
        }}
        onChange={handleLatitudeChange}
        value={values.latitude}
        required
      />
      <input
        type="text"
        placeholder="Enter longitude"
        style={{
          width: "100%",
          padding: "0.5rem",
        }}
        onChange={handleLongitudeChange}
        value={values.longitude}
        required
      />
      <button>Search</button>
    </form>
  );
};

export default Search;
