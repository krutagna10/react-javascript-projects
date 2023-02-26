import { useState } from "react";

const ArtistsForm = ({ onAddArtist, artists }) => {
  const [name, setName] = useState("");
  const [index, setIndex] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleIndexChange = (event) => {
    setIndex(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = { name: name };

    onAddArtist(data, Number(index));

    setIndex("");
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleNameChange}
        value={name}
        placeholder="Name"
        required
      />
      <input
        type="number"
        placeholder="Insert at Index"
        onChange={handleIndexChange}
        value={index}
        min="0"
        max={artists.length}
        required
        style={{ marginLeft: "1rem" }}
      />
      <button style={{ marginLeft: "1rem" }}>Insert</button>
    </form>
  );
};

export default ArtistsForm;
