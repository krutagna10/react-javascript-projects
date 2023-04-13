import TodoAdd from "./components/TodoAdd/TodoAdd";
import TodoProvider from "./context/TodoProvider";
import Todos from "./components/Todos/Todos";

function TodoApp() {
  return (
    <div>
      <TodoProvider>
        <h1 className="text--center">Todo App</h1>
        <TodoAdd />
        <Todos />
      </TodoProvider>
    </div>
  );
}

export default TodoApp;
