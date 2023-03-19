import { useState } from "react";

const AddTodo = ({ onAddTodo }) => {
  const [title, setTitle] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Calling addTodoFunction with title as parameter
    onAddTodo(title);

    // Resetting the value of title
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex" }}>
      <input
        type="text"
        placeholder="Enter Todo"
        onChange={handleTitleChange}
        value={title}
        required
        style={{ width: "100%" }}
      />
      <button>Add</button>
    </form>
  );
};

export default AddTodo;
