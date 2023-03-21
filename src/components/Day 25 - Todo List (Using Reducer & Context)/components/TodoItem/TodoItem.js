import React, { useContext, useState } from "react";
import { TodosDispatchContext } from "../../TodoContext";

const TodoItem = ({ todo, index }) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useContext(TodosDispatchContext);

  const handleDeleteTodo = (deleteId) => {
    dispatch({ type: "delete-todo", deleteId: deleteId });
  };

  const handleChangeTodo = (nextTodo) => {
    dispatch({ type: "change-todo", nextTodo: nextTodo });
  };

  const handleClick = () => {
    setIsEditing((prevIsEditing) => !prevIsEditing);
  };

  return (
    <tr>
      <td>{index}</td>
      <td>
        {isEditing ? (
          <input
            type="text"
            value={todo.title}
            onChange={(event) => {
              const nextTodo = { ...todo, title: event.target.value };
              handleChangeTodo(nextTodo);
            }}
          />
        ) : (
          <React.Fragment>{todo.title}</React.Fragment>
        )}
      </td>
      <td onChange={() => {}}>
        <input
          type="checkbox"
          checked={todo.isDone}
          onChange={(event) => {
            const nextTodo = { ...todo, isDone: event.target.checked };
            handleChangeTodo(nextTodo);
          }}
        />
      </td>
      <td>
        <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
      </td>
      <td>
        <button
          onClick={() => {
            handleDeleteTodo(todo.id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TodoItem;
