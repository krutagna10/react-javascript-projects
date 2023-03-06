import { useState } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
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
        required
      />
      <button>Search</button>
    </form>
  );
};

export default Search;
