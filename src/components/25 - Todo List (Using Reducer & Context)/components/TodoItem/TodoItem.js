import React, { useContext, useState } from "react";
import TodoContext from "../../context/TodoContext";

function TodoItem({ todo, index }) {
  const [isEditing, setIsEditing] = useState(false);
  const { onDeleteTodo } = useContext(TodoContext);

  const handleDeleteTodo = (deleteId) => {
    onDeleteTodo(deleteId);
  };

  return (
    <tr>
      <td>{index}</td>
      <td>
        {isEditing ? (
          <input type="text" value={todo.title} />
        ) : (
          <React.Fragment>{todo.title}</React.Fragment>
        )}
      </td>
      <td onChange={() => {}}>
        <input type="checkbox" checked={todo.isDone} />
      </td>
      <td>
        <button>{isEditing ? "Save" : "Edit"}</button>
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
}

export default TodoItem;
