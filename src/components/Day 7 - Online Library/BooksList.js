import React from 'react';

const BooksList = ({books, onDelete, onShowEditForm, editIndex}) => {
    return (
        <table>
            <thead>
            <tr>
                <th>Index</th>
                <th>Name</th>
                <th>Author</th>
                <th>Pages</th>
                <th>Delete Button</th>
                <th>Edit Button</th>
            </tr>
            </thead>
            <tbody>
            {books.length === 0 ? (
                <tr>
                    <td colSpan='5'>No books found</td>
                </tr>
            ) : (
                <React.Fragment>
                {books.map((book, index) => (
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{book.name}</td>
                            <td>{book.author}</td>
                            <td>{book.pages}</td>
                            <td>
                                <button
                                    disabled={editIndex === index}
                                    onClick={() => onDelete(index)}
                                >
                                    Delete Book
                                </button>
                            </td>
                            <td>
                                <button onClick={() => onShowEditForm(index)}>
                                    Edit Book Data
                                </button>
                            </td>
                        </tr>
                    ))}
                </React.Fragment>
            )}
            </tbody>
        </table>
    );
};

export default BooksList;