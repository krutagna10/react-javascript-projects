import SearchUser from "./SearchUser";
import {useState} from "react";

const UsersList = ({users}) => {
    const [searchValue, setSearchValue] = useState('');

    const setSearchValueHandler = (value) => {
        setSearchValue(value);
    }

    console.log(users.filter(user => user.name.includes(searchValue)))

    return (
        <div className='users'>
            <h1>Users</h1>
            <SearchUser onSearch={setSearchValueHandler}/>
            <ul style={{listStyle: 'none', padding: 0}}>
                {users
                    .filter(user => user.name.toLowerCase().includes(searchValue))
                    .map((user, index) => (
                    <li key={index}>
                        {`${user.name} is ${user.age} years old`}
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default UsersList;