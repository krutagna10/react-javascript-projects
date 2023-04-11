import data from "./data.json";
import React, { useState } from "react";
import EmojiList from "./components/EmojiList/EmojiList";

const EmojiSearch = () => {
  const [emojis, setEmojis] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredEmojis = emojis.filter((emoji) =>
    emoji.keywords.includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ minWidth: "32rem" }}>
      <h1>Emoji Search</h1>
      <input
        style={{ width: "100%" }}
        onChange={handleSearchTermChange}
        type="text"
        placeholder="Search..."
      />
      <EmojiList emojis={filteredEmojis} />
    </div>
  );
};

export default EmojiSearch;
