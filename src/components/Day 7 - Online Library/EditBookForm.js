import {useState} from "react";

const EditBookForm = ({book, onEditBook}) => {
    const [editData, setEditData] = useState({
        name: book.name,
        author: book.author,
        pages: book.pages,
    });

    const handleNameChange = (event) => {
        setEditData({...editData, name: event.target.value});
    };

    const handleAuthorChange = (event) => {
        setEditData({...editData, author: event.target.value});
    };

    const handlePagesChange = (event) => {
        setEditData({...editData, pages: event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onEditBook({...editData});
    }

    return (
        <form style={{marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', gap: '1rem'}} onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='Book Name'
                onChange={handleNameChange}
                value={editData.name}
                required
            />
            <input
                type='text'
                placeholder='Book Author'
                onChange={handleAuthorChange}
                value={editData.author}
                required
            />
            <input
                type='num'
                placeholder='Book Pages'
                onChange={handlePagesChange}
                value={editData.pages}
                required
            />
            <button type='Submit'>Edit Book</button>
        </form>
    );
};

export default EditBookForm;