import { useState } from "react";

function BookItem({ index, book, onEditBook, onDeleteBook }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleIsEditingChange() {
    setIsEditing((prevIsEditing) => !prevIsEditing);
  }

  function handleTitleChange(event) {
    onEditBook({ ...book, title: event.target.value });
  }

  function handleAuthorChange(event) {
    onEditBook({ ...book, author: event.target.value });
  }

  function handlePagesChange(event) {
    onEditBook({ ...book, pages: event.target.value });
  }

  function handleIsReadChange(event) {
    onEditBook({ ...book, isRead: event.target.checked });
  }

  return (
    <tr>
      <td>{index}</td>
      <td>
        {isEditing ? (
          <input type="text" value={book.title} onChange={handleTitleChange} />
        ) : (
          <>{book.title}</>
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type="text"
            value={book.author}
            onChange={handleAuthorChange}
          />
        ) : (
          <>{book.author}</>
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type="number"
            value={book.pages}
            onChange={handlePagesChange}
          />
        ) : (
          <>{book.pages}</>
        )}
      </td>
      <td>
        <input
          type="checkbox"
          checked={book.isRead}
          onChange={handleIsReadChange}
        />
      </td>
      <td>
        <button onClick={handleIsEditingChange}>
          {isEditing ? "Save" : "Edit"}
        </button>
      </td>
      <td>
        <button
          onClick={() => {
            onDeleteBook(book.id);
          }}
        >
          Delete Book
        </button>
      </td>
    </tr>
  );
}

export default BookItem;
