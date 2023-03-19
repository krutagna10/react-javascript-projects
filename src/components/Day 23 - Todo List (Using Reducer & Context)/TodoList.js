import React, { useState } from "react";

const Todo = ({ todo, index, onChange, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);

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
              onChange({ ...todo, title: event.target.value });
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
            onChange({ ...todo, isDone: event.target.checked });
          }}
        />
      </td>
      <td>
        <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
      </td>
      <td>
        <button
          onClick={() => {
            onDelete(todo.id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

const TodoList = ({ todos, onDeleteTodo, onChangeTodo }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Index</th>
          <th>Title</th>
          <th>Done</th>
          <th>Edit/Save Button</th>
          <th>Delete Button</th>
        </tr>
      </thead>
      <tbody>
        {todos.length === 0 ? (
          <tr>
            <td colSpan="5">No Tasks Found</td>
          </tr>
        ) : (
          <React.Fragment>
            {todos.map((todo, index) => (
              <Todo
                key={todo.id}
                onChange={onChangeTodo}
                onDelete={onDeleteTodo}
                todo={todo}
                index={index}
              />
            ))}
          </React.Fragment>
        )}
      </tbody>
    </table>
  );
};

export default TodoList;
