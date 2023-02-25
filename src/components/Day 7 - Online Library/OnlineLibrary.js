import AddBookForm from "./AddBookForm";
import BooksList from "./BooksList";
import {useState} from "react";

const INITIAL_BOOKS = [
    {name: 'Game of Thrones', author: 'George .R. Martin', pages: 900},
    {name: 'Alice in Wonderland', author: 'Lewis Caroll', pages: 400},
    {name: 'Gulliver Travels', author: 'Jonathan Swift', pages: 300},
]

const OnlineLibrary = () => {
    const [books, setBooks] = useState(INITIAL_BOOKS);

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

    return (
        <div className='library'>
            <AddBookForm onAddBook={handleAddBook}/>
            <BooksList
                books={books}
                onDelete={handleDelete}
            />
        </div>
    );
};

export default OnlineLibrary;