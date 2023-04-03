import BookForm from "./components/BookForm/BookForm";
import BookList from "./components/BookList/BookList";
import INITIAL_BOOKS from "./data";
import { useReducer, useState } from "react";

function reducer(books, action) {
  switch (action.type) {
    case "add-book": {
      return [...books, action.newBook];
    }
    case "edit-book": {
      const nextBooks = books.map((book) => {
        return action.nextBook.id === book.id ? action.nextBook : book;
      });
      return nextBooks;
    }
    case "delete-book": {
      const nextBooks = books.filter((book) => {
        return action.deleteId !== book.id;
      });
      return nextBooks;
    }
    default: {
      throw new Error("Invalid action: " + action.type);
    }
  }
}

function OnlineLibrary() {
  const [books, dispatch] = useReducer(reducer, INITIAL_BOOKS);

  function handleAddBook({ title, author, pages, isRead }) {
    const newBook = {
      id: crypto.randomUUID(),
      title: title,
      author: author,
      pages: Number(pages),
      isRead: isRead,
    };
    dispatch({ type: "add-book", newBook: newBook });
  }

  function handleEditBook(nextBook) {
    dispatch({ type: "edit-book", nextBook: nextBook });
  }

  function handleDeleteBook(deleteId) {
    dispatch({ type: "delete-book", deleteId: deleteId });
  }

  return (
    <div>
      <h1>Online Library</h1>
      <BookForm onAddBook={handleAddBook} />
      <BookList
        books={books}
        onEditBook={handleEditBook}
        onDeleteBook={handleDeleteBook}
      />
    </div>
  );
}

export default OnlineLibrary;
