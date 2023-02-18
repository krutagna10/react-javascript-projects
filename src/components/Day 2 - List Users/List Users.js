import {useState} from "react";
import UsersForm from "./components/UsersForm";
import UsersList from "./components/UsersList";

const ListUsers = () => {
    const initialData = [
        {name: 'Krutagna', age: 20},
        {name: 'Akshit', age: 20},
    ]

    const [users, setUsers] = useState(initialData);

    const addUserHandler = (data) => {
        setUsers(prevState => [...prevState, data]);
    }

    return (
        <div className="app">
            <UsersForm onAdd={addUserHandler}/>
            <UsersList users={users}/>
        </div>
    );
};

export default ListUsers;