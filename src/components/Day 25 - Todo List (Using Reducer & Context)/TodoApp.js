import { useReducer } from "react";
import TodoAdd from "./components/TodoAdd/TodoAdd";
import TodoList from "./components/TodoList/TodoList";
import { TodosContext, TodosDispatchContext } from "./TodoContext";

const initialTodos = [
  { id: crypto.randomUUID(), title: "Philosopher’s Path", isDone: true },
  { id: crypto.randomUUID(), title: "Visit the temple", isDone: false },
  { id: crypto.randomUUID(), title: "Drink matcha", isDone: false },
];

function reducer(todos, action) {
  switch (action.type) {
    case "add-todo": {
      const newTodo = {
        id: crypto.randomUUID(),
        title: action.title,
        isDone: false,
      };
      return [...todos, newTodo];
    }
    case "delete-todo": {
      const nextTodos = todos.filter((todo) => {
        return action.deleteId !== todo.id;
      });
      return nextTodos;
    }
    case "change-todo": {
      const nextTodos = todos.map((todo) => {
        return action.nextTodo.id === todo.id ? action.nextTodo : todo;
      });
      return nextTodos;
    }
    default: {
      throw new Error("Invalid action: " + action.type);
    }
  }
}

const TodoApp = () => {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  return (
    <div>
      <TodosContext.Provider value={todos}>
        <TodosDispatchContext.Provider value={dispatch}>
          <h1 style={{ textAlign: "center" }}>Todo App</h1>
          <TodoAdd />
          <TodoList />
        </TodosDispatchContext.Provider>
      </TodosContext.Provider>
    </div>
  );
};

export default TodoApp;
