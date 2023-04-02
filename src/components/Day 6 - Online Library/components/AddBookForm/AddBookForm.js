import { useState } from "react";

const AddBookForm = ({ onAddBook }) => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState("");

  const [nameError, setNameError] = useState(false);

  const [authorError, setAuthorError] = useState(false);

  const [pagesError, setPagesError] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
    if (event.target.value.trim() !== "") {
      setNameError(false);
    }
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
    if (event.target.value.trim() !== "") {
      setAuthorError(false);
    }
  };

  const handlePagesChange = (event) => {
    setPages(event.target.value);
    if (event.target.value.trim() !== "") {
      setPagesError(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation
    if (name.trim() === "") {
      setNameError(true);
      return;
    }

    if (author.trim() === "") {
      setAuthorError(true);
      return;
    }

    if (pages.trim() === "") {
      setPagesError(true);
      return;
    }

    // Sending data to parent
    onAddBook({ name: name, author: author, pages: pages });

    // Resetting values
    setName("");
    setAuthor("");
    setPages("");
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Book Name"
          onChange={handleNameChange}
          value={name}
          style={{
            border: !nameError ? "1px solid black" : "1px solid red",
          }}
        />
        <input
          type="text"
          placeholder="Book Author"
          onChange={handleAuthorChange}
          value={author}
          style={{
            border: !authorError ? "1px solid black" : "1px solid red",
          }}
        />
        <input
          type="number"
          placeholder="Book Pages"
          onChange={handlePagesChange}
          value={pages}
          style={{
            border: !pagesError ? "1px solid black" : "1px solid red",
          }}
        />
        <button type="Submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBookForm;
