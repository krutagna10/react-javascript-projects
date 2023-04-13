import { useContext, useState } from "react";
import TodoContext from "../../context/TodoContext";

function TodoAdd() {
  const [title, setTitle] = useState("");
  const { onAddTodo } = useContext(TodoContext);

  function handleTitleChange(event) {
    setTitle(event.target.value);
    event.preventDefault();
  }

  function handleSubmit(event) {
    event.preventDefault();
    onAddTodo(title);
    setTitle("");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Todo"
        onChange={handleTitleChange}
        value={title}
        required
      />
      <button>Add</button>
    </form>
  );
}

export default TodoAdd;
