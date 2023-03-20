import { useState } from "react";

const Input = ({ onSearch }) => {
  const handleSearchTermChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <input
      type="text"
      onChange={handleSearchTermChange}
      style={{ width: "100%", padding: "0.5rem" }}
      required
      placeholder="Search..."
    />
  );
};

export default Input;
