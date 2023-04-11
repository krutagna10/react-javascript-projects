import { useState } from "react";

const TodoListHeader = () => {
  return (
    <thead>
      <tr>
        <th>Index</th>
        <th>Done</th>
        <th>Title</th>
        <th>Edit / Save</th>
        <th>Delete</th>
      </tr>
    </thead>
  );
};

const TodoItem = ({ index, todo, onDelete, onChange }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleTitleChange = (event) => {
    onChange({ ...todo, title: event.target.value });
  };

  const handleDoneChange = (event) => {
    onChange({ ...todo, done: event.target.checked });
  };
  const handleToggleEditing = () => {
    setIsEditing((prevIsEditing) => !prevIsEditing);
  };

  const todoContent = isEditing ? (
    <td>
      <input
        style={{ textAlign: "center" }}
        type="text"
        value={todo.title}
        onChange={handleTitleChange}
      />
    </td>
  ) : (
    <td>{todo.title}</td>
  );

  return (
    <tr>
      <td>{index}</td>
      <td>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={handleDoneChange}
        />
      </td>
      {todoContent}
      <td>
        <button onClick={handleToggleEditing}>
          {isEditing ? "Save" : "Edit"}
        </button>
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

const TodoList = ({ todos, onDeleteTodo, onTodoChange }) => {
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
                key={todo.id}
                index={index}
                todo={todo}
                onChange={onTodoChange}
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
