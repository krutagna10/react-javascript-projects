import {useState} from 'react';

const AddBookForm = ({onAddBook}) => {
    const [bookData, setBookData] = useState({
        name: '',
        author: '',
        pages: '',
    });

    const handleNameChange = (event) => {
        setBookData({...bookData, name: event.target.value});
    };

    const handleAuthorChange = (event) => {
        setBookData({...bookData, author: event.target.value});
    };

    const handlePagesChange = (event) => {
        setBookData({...bookData, pages: event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        onAddBook({...bookData});

        setBookData({name: '', author: '', pages: ''});
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='Book Name'
                onChange={handleNameChange}
                value={bookData.name}
                required
            />
            <input
                type='text'
                placeholder='Book Author'
                onChange={handleAuthorChange}
                value={bookData.author}
                required
            />
            <input
                type='num'
                placeholder='Book Pages'
                onChange={handlePagesChange}
                value={bookData.pages}
                required
            />
            <button type='Submit'>Add Book</button>
        </form>
    );
};

export default AddBookForm;