import TodoAdd from "./components/TodoAdd/TodoAdd";
import TodoList from "./components/TodoList/TodoList";
import TodoProvider from "./context/TodoProvider";

function TodoApp() {
  return (
    <div>
      <TodoProvider>
        <h1 style={{ textAlign: "center" }}>Todo App</h1>
        <TodoAdd />
        <TodoList />
      </TodoProvider>
    </div>
  );
}

export default TodoApp;
