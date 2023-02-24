import {useState} from 'react';

const AddBookForm = ({onAddBook}) => {
    const [bookData, setBookData] = useState({
        name: '',
        author: '',
        pages: '',
    });

    const [isFormVisible, setIsFormVisible] = useState(false);

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

        setIsFormVisible(false);

        // Resetting values
        setBookData({name: '', author: '', pages: ''});
    };

    const handleAddBookClick = () => {
        setIsFormVisible(true);
    };

    return (
        <div className='form-wrapper'>
            {!isFormVisible ? (
                <button onClick={handleAddBookClick} style={{width: '100%'}}>Add Book</button>
            ) : (
                <form onSubmit={handleSubmit} style={{display: 'flex', justifyContent: 'space-between', gap: '1rem'}}>
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
            )}
        </div>
    );
};

export default AddBookForm;