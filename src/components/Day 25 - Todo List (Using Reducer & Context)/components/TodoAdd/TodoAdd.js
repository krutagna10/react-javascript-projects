import { useContext, useState } from "react";
import { TodosDispatchContext } from "../../TodoContext";

const TodoAdd = () => {
  const [title, setTitle] = useState("");
  const dispatch = useContext(TodosDispatchContext);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({ type: "add-todo", title: title });

    // Resetting the value of title
    setTitle("");
  };

  return (
    <form className="form">
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
};

export default TodoAdd;
