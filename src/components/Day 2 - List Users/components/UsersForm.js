import {useState} from "react";

const UsersForm = (props) => {
    const [inputName, setInputName] = useState('');
    const [inputAge, setInputAge] = useState('');

    const nameChangeHandler = (event) => {
        setInputName(event.target.value);
    };

    const ageChangeNumber = (event) => {
        setInputAge(event.target.value);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        props.onAdd({name: inputName, age: inputAge})

        // Resetting values
        setInputName('');
        setInputAge('')
    }

    return (
        <form onSubmit={formSubmitHandler} style={{display: 'flex', flexDirection: 'column'}}>
            <input
                onChange={nameChangeHandler}
                type='text'
                placeholder='name'
                value={inputName}
                required
            />
            <input
                onChange={ageChangeNumber}
                type='age'
                placeholder='age'
                value={inputAge}
                required
            />
            <button type='submit'>Add User</button>
        </form>
    );
};

export default UsersForm;