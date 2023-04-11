import BookItem from "../BookItem/BookItem";
import { BookContext } from "../../context/BookContext";
import { useContext } from "react";

function BookList({ onEditBook, onDeleteBook }) {
  const books = useContext(BookContext);

  return (
    <table>
      <thead>
        <tr>
          <th>Index</th>
          <th>Name</th>
          <th>Author</th>
          <th>Pages</th>
          <th>Is Read</th>
          <th>Edit Button</th>
          <th>Delete Button</th>
        </tr>
      </thead>
      <tbody>
        {books.length === 0 ? (
          <tr>
            <td colSpan="7">No Books Found</td>
          </tr>
        ) : (
          <>
            {books.map((book, index) => (
              <BookItem
                key={book.id}
                index={index}
                book={book}
                onEditBook={onEditBook}
                onDeleteBook={onDeleteBook}
              />
            ))}
          </>
        )}
      </tbody>
    </table>
  );
}

export default BookList;
