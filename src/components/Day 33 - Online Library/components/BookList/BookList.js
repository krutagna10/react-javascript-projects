function BookList({ books }) {
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
          <tr key={book.id}>
            <td>{index}</td>
            <td>{book.name}</td>
            <td>{book.author}</td>
            <td>{book.pages}</td>
            <td>
              <input type="checkbox" checked={book.isRead} />
            </td>
            <td>
              <button>Edit Book</button>
            </td>
            <td>
              <button>Delete Book</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BookList;
