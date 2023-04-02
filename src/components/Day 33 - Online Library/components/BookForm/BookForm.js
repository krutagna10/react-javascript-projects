import { useState } from "react";

function BookForm() {
  const [values, setValues] = useState({
    name: "",
    author: "",
    pages: "",
    isRead: false,
  });

  function handleNameChange(event) {
    setValues((prevValues) => {
      return {
        ...prevValues,
        name: event.target.value,
      };
    });
  }

  function handleAuthorChange(event) {
    setValues((prevValues) => {
      return {
        ...prevValues,
        author: event.target.value,
      };
    });
  }

  function handlePagesChange(event) {
    setValues((prevValues) => {
      return {
        ...prevValues,
        pages: event.target.value,
      };
    });
  }

  function handleIsReadChange(event) {
    setValues((prevValues) => {
      return {
        ...prevValues,
        isRead: event.target.checked,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log(values);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={values.name}
        onChange={handleNameChange}
        placeholder="Book Name"
        required
      />
      <input
        type="text"
        value={values.author}
        onChange={handleAuthorChange}
        placeholder="Book Author"
        required
      />
      <input
        type="number"
        value={values.pages}
        onChange={handlePagesChange}
        placeholder="Book Pages"
        required
      />
      <label className="flex flex-align-center" style={{ gap: "0.15rem" }}>
        Read{" "}
        <input
          type="checkbox"
          onChange={handleIsReadChange}
          checked={values.isRead}
        />
      </label>
      <button>Add Book</button>
    </form>
  );
}

export default BookForm;
