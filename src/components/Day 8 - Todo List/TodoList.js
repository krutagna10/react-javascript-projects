import { useState } from "react";

const TodoListHeader = () => {
  return (
    <thead>
      <tr>
        <th>Index</th>
        <th>Done</th>
        <th>Title</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
  );
};

const TodoItem = ({ todo, index, onDelete, onTitleChange, onDoneChange }) => {
  const [title, setTitle] = useState(todo.title);
  const [done, setDone] = useState(todo.done);

  const [isEditing, setIsEditing] = useState(false);

  const handleEnableEditing = () => {
    setIsEditing(true);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDoneChange = (event) => {
    setDone(event.target.checked);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <tr>
      {isEditing ? (
        <>
          <td>{index}</td>
          <td>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={(event) => {
                onDoneChange(index, event.target.checked);
              }}
            />
          </td>
          <td>
            <input
              style={{ textAlign: "center" }}
              type="text"
              value={todo.title}
              onChange={(event) => {
                onTitleChange(index, event.target.value);
              }}
              required
            />
          </td>
          <td>
            <button onClick={handleSave}>Save</button>
          </td>
          <td>
            <button
              onClick={() => {
                onDelete(index);
              }}
            >
              Delete
            </button>
          </td>
        </>
      ) : (
        <>
          <td>{index}</td>
          <td>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={(event) => {
                onDoneChange(index, event.target.checked);
              }}
            />
          </td>
          <td>{todo.title}</td>
          <td>
            <button onClick={handleEnableEditing}>Edit</button>
          </td>
          <td>
            <button
              onClick={() => {
                onDelete(index);
              }}
            >
              Delete
            </button>
          </td>
        </>
      )}
    </tr>
  );
};

const TodoList = ({ todos, onDeleteTodo, onDoneChange, onTitleChange }) => {
  return (
    <table>
      <TodoListHeader />
      <tbody>
        {todos.length === 0 ? (
          <tr>
            <td colSpan="5">No Tasks</td>
          </tr>
        ) : (
          <>
            {todos.map((todo, index) => (
              <TodoItem
                key={index}
                todo={todo}
                index={index}
                onTitleChange={onTitleChange}
                onDoneChange={onDoneChange}
                onDelete={onDeleteTodo}
              />
            ))}
          </>
        )}
      </tbody>
    </table>
  );
};

export default TodoList;
