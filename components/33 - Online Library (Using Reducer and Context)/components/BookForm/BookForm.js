import { useReducer } from "react";

function reducer(values, action) {
  switch (action.type) {
    case "title-change": {
      return { ...values, title: action.title };
    }
    case "author-change": {
      return { ...values, author: action.author };
    }
    case "pages-change": {
      return { ...values, pages: action.pages };
    }
    case "isRead-change": {
      return { ...values, isRead: action.isRead };
    }
    case "reset-values": {
      return { title: "", author: "", pages: "", isRead: false };
    }
    default: {
      throw new Error("Invalid action: " + action.type);
    }
  }
}

function BookForm({ onAddBook }) {
  const [values, dispatch] = useReducer(reducer, {
    title: "",
    author: "",
    pages: "",
    isRead: false,
  });

  function handleTitleChange(event) {
    dispatch({ type: "title-change", title: event.target.value });
  }

  function handleAuthorChange(event) {
    dispatch({ type: "author-change", author: event.target.value });
  }

  function handlePagesChange(event) {
    dispatch({ type: "pages-change", pages: event.target.value });
  }

  function handleIsReadChange(event) {
    dispatch({ type: "isRead-change", isRead: event.target.checked });
  }

  function handleSubmit(event) {
    event.preventDefault();

    onAddBook({ ...values });

    dispatch({ type: "reset-values" });
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={values.title}
        onChange={handleTitleChange}
        placeholder="Book Title"
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
      <label className="flex flex--align-center" style={{ gap: "0.15rem" }}>
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
