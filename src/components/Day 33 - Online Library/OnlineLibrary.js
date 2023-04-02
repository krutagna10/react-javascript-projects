import BookForm from "./components/BookForm/BookForm";
import { useState } from "react";
import BookList from "./components/BookList/BookList";

const INITIAL_BOOKS = [
  {
    id: crypto.randomUUID(),
    name: "Game of Thrones",
    author: "George .R. Martin",
    pages: 900,
    isRead: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Lord of the Rings",
    author: "J.R.R Tolkien",
    pages: 400,
    isRead: true,
  },
  {
    id: crypto.randomUUID(),
    name: "Harry Potter",
    author: "JK Rowling",
    pages: 300,
    isRead: false,
  },
];

function OnlineLibrary() {
  const [books, setBooks] = useState(INITIAL_BOOKS);

  return (
    <div>
      <h1>Online Library</h1>
      <BookForm />
      <BookList books={books} />
    </div>
  );
}

export default OnlineLibrary;
