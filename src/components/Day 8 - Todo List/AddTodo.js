import { useState } from "react";

const AddTodo = ({ onAddTodo }) => {
  const [title, setTitle] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onAddTodo({ title: title });
  };

  return (
    <form
      className="todo__form"
      onSubmit={handleSubmit}
      style={{ display: "flex" }}
    >
      <input
        type="text"
        placeholder="Add Todo"
        value={title}
        onChange={handleTitleChange}
        style={{ width: "100%" }}
        required
      />
      <button style={{ marginLeft: "0.5rem" }}>Add</button>
    </form>
  );
};

export default AddTodo;
