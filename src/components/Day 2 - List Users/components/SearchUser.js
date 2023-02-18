import {useState} from "react";

const SearchUser = (props) => {
    const [searchValue, setSearchValue] = useState('');

    const searchChangeHandler = (event) => {
        props.onSearch(event.target.value);
    }


    return (
        <input
            type='text'
            placeholder='Search...'
            onChange={searchChangeHandler}
        />
    );
};

export default SearchUser;