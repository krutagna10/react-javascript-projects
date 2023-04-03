import BookItem from "../BookItem/BookItem";

function BookList({ books, onEditBook, onDeleteBook }) {
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
        {books.map((book, index) => (
          <BookItem
            key={book.id}
            index={index}
            book={book}
            onEditBook={onEditBook}
            onDeleteBook={onDeleteBook}
          />
        ))}
      </tbody>
    </table>
  );
}

export default BookList;
