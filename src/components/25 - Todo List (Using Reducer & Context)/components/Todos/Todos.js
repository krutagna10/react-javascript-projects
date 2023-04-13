import TodoList from "../TodoList/TodoList";
import { useContext, useState } from "react";
import TodoContext from "../../context/TodoContext";

function Todos() {
  const { todos } = useContext(TodoContext);
  const [searchTerm, setSearchTerm] = useState("");

  // Filtering the todos
  let filteredTodos = todos.filter((todo) => {
    return todo.title.toLowerCase().includes(searchTerm);
  });

  function handleSearchTermChange(event) {
    setSearchTerm(event.target.value.toLowerCase());
  }

  return (
    <div className="margin-200">
      <h2 className="text--center">Todos List</h2>
      <div className="flex flex--justify-center">
        <input
          type="text"
          placeholder="Search..."
          onChange={handleSearchTermChange}
        />
        {/*<button>Show All</button>*/}
        {/*<button>Show Completed</button>*/}
      </div>
      <TodoList todos={filteredTodos} />
    </div>
  );
}

export default Todos;
