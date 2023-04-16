import { useState } from "react";

const AddTodo = ({ onAddTodo }) => {
  const [title, setTitle] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onAddTodo({ title: title });

    setTitle("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add TodoApp"
        value={title}
        onChange={handleTitleChange}
        required
      />
      <button>Add</button>
    </form>
  );
};

export default AddTodo;
