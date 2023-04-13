import React, { useContext, useState } from "react";
import TodoContext from "../../context/TodoContext";

function TodoItem({ todo, index }) {
  const [isEditing, setIsEditing] = useState(false);
  const { onEditTodo, onDeleteTodo } = useContext(TodoContext);

  function handleChangeIsEditing() {
    setIsEditing((prevIsEditing) => !prevIsEditing);
  }

  function handleIsCompletedChange(event) {
    const editedTodo = { ...todo, isCompleted: event.target.checked };
    onEditTodo(editedTodo);
  }

  function handleTitleChange(event) {
    const editedTodo = { ...todo, title: event.target.value };
    onEditTodo(editedTodo);
  }

  function handleDeleteTodo(deleteId) {
    onDeleteTodo(deleteId);
  }

  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        {isEditing ? (
          <input type="text" value={todo.title} onChange={handleTitleChange} />
        ) : (
          <>{todo.title}</>
        )}
      </td>
      <td>
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={handleIsCompletedChange}
        />
      </td>
      <td>
        <button onClick={handleChangeIsEditing}>
          {isEditing ? "Save" : "Edit"}
        </button>
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
