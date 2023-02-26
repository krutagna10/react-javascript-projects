import AddBookForm from "./AddBookForm";
import BooksList from "./BooksList";
import { useState } from "react";
import uuid from "react-uuid";

const INITIAL_BOOKS = [
  {
    id: uuid(),
    name: "Game of Thrones",
    author: "George .R. Martin",
    pages: 900,
  },
  {
    id: uuid(),
    name: "Alice in Wonderland",
    author: "Lewis Caroll",
    pages: 400,
  },
  {
    id: uuid(),
    name: "Gulliver Travels",
    author: "Jonathan Swift",
    pages: 300,
  },
];

const OnlineLibrary = () => {
  const [books, setBooks] = useState(INITIAL_BOOKS);

  const handleAddBook = ({ name, author, pages }) => {
    const newBook = {
      id: uuid(),
      name: name,
      author: author,
      pages: Number(pages),
    };

    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  const handleDelete = (deleteId) => {
    setBooks((prevBooks) => {
      const updatedBooks = prevBooks.filter((book) => deleteId !== book.id);
      return updatedBooks;
    });
  };

  return (
    <div className="library">
      <AddBookForm onAddBook={handleAddBook} />
      <BooksList books={books} onDelete={handleDelete} />
    </div>
  );
};

export default OnlineLibrary;
