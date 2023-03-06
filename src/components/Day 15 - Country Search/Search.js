import { useState } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <form style={{ display: "flex", gap: "1rem" }} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter the username"
        style={{
          width: "100%",
          padding: "0.5rem",
        }}
        onChange={handleSearchChange}
        required
      />
      <button>Search</button>
    </form>
  );
};

export default Search;
