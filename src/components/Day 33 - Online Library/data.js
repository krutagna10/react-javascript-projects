const INITIAL_BOOKS = [
  {
    id: crypto.randomUUID(),
    title: "Game of Thrones",
    author: "George .R. Martin",
    pages: 900,
    isRead: false,
  },
  {
    id: crypto.randomUUID(),
    title: "Lord of the Rings",
    author: "J.R.R Tolkien",
    pages: 400,
    isRead: true,
  },
  {
    id: crypto.randomUUID(),
    title: "Harry Potter",
    author: "JK Rowling",
    pages: 300,
    isRead: false,
  },
];

export default INITIAL_BOOKS;
