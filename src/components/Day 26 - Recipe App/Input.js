import { useState } from "react";

const Input = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchTerm("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "0.75rem" }}>
      <input
        type="text"
        onChange={handleSearchTermChange}
        style={{ width: "100%" }}
        required
        value={searchTerm}
      />
      <button>Search</button>
    </form>
  );
};

export default Input;
