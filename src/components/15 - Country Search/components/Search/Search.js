import { useState } from "react";

const Search = ({ onSearchCountry }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearchCountry(searchTerm);
    setSearchTerm("");
  };

  return (
    <form style={{ display: "flex", gap: "1rem" }} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter country name"
        style={{
          width: "100%",
          padding: "0.5rem",
        }}
        onChange={handleSearchTermChange}
        value={searchTerm}
        required
      />
      <button>Search</button>
    </form>
  );
};

export default Search;
