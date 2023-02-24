import AddBookForm from "./AddBookForm";
import EditBookForm from "./EditBookForm";
import BooksList from "./BooksList";
import {useState} from "react";

const INITIAL_BOOKS = [
    {name: 'Game of Thrones', author: 'George .R. Martin', pages: 900},
    {name: 'Alice in Wonderland', author: 'Lewis Caroll', pages: 400},
    {name: 'Gulliver Travels', author: 'Jonathan Swift', pages: 300},
]

const OnlineLibrary = () => {
    const [books, setBooks] = useState(INITIAL_BOOKS);
    const [isEditFormVisible, setIsEditFormVisible] = useState(false);
    const [editIndex, setEditIndex] = useState(-1);

    const handleAddBook = ({name, author, pages}) => {
        const newBook = {
            name: name,
            author: author,
            pages: Number(pages),
        };

        setBooks([...books, newBook]);
    };

    const handleDelete = (inputIndex) => {
        const nextBooks = books.filter((_, index) => inputIndex !== index);
        setBooks([...nextBooks]);
    };

    const handleEditBook = ({name, author, pages}) => {
        const nextBooks = books.map((book, index) => {
            if (editIndex === index) {
                book.name = name;
                book.author = author;
                book.pages = pages;
            }
            return book;
        });
        setBooks([...nextBooks]);
        setEditIndex(-1);
        setIsEditFormVisible(false);
    }

    const handleShowEditForm = (index) => {
        setIsEditFormVisible(true);
        setEditIndex(index);
    };

    return (
        <div className='library'>
            <AddBookForm onAddBook={handleAddBook}/>
            {isEditFormVisible && (
                <EditBookForm
                    book={books[editIndex]}
                    onEditBook={handleEditBook}
                />
            )}
            <BooksList
                books={books}
                onDelete={handleDelete}
                editIndex={editIndex}
                onShowEditForm={handleShowEditForm}
            />
        </div>
    );
};

export default OnlineLibrary;