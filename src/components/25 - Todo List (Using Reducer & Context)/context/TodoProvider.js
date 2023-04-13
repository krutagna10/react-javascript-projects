import TodoContext from "./TodoContext";
import { useReducer } from "react";

const INITIAL_TODOS = [
  { id: crypto.randomUUID(), title: "Go to Grocery Store", isDone: true },
  {
    id: crypto.randomUUID(),
    title: "Study useContext hook in React",
    isDone: false,
  },
  {
    id: crypto.randomUUID(),
    title: "Study for university examinations",
    isDone: false,
  },
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
    default: {
      throw new Error("Invalid action: " + action.type);
    }
  }
}

function TodoProvider({ children }) {
  const [todos, dispatch] = useReducer(reducer, INITIAL_TODOS);

  function handleAddTodo(title) {
    dispatch({ type: "add-todo", title: title });
  }

  function handleDeleteTodo(deleteId) {
    dispatch({ type: "delete-todo", deleteId: deleteId });
  }

  const value = {
    todos: todos,
    onAddTodo: handleAddTodo,
    onDeleteTodo: handleDeleteTodo,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

export default TodoProvider;
