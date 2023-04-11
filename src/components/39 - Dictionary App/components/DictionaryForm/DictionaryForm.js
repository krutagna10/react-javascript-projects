import { useState } from "react";

function DictionaryForm({ onWordSearch }) {
  const [word, setWord] = useState("");

  function handleWordChange(event) {
    setWord(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onWordSearch(word);
    setWord("");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleWordChange}
        value={word}
        placeholder="Enter word"
        required
      />
      <button>Search</button>
    </form>
  );
}

export default DictionaryForm;
