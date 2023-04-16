import TodoContext from "./TodoContext";
import INITIAL_TODOS from "./data";
import { useReducer } from "react";

function reducer(todos, action) {
  switch (action.type) {
    case "add-todo": {
      const newTodo = {
        id: crypto.randomUUID(),
        title: action.title,
        isCompleted: false,
      };
      return [...todos, newTodo];
    }
    case "edit-todo": {
      const nextTodos = todos.map((todo) => {
        return action.editedTodo.id === todo.id ? action.editedTodo : todo;
      });
      return nextTodos;
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

  function handleEditTodo(editedTodo) {
    dispatch({ type: "edit-todo", editedTodo: editedTodo });
  }

  function handleDeleteTodo(deleteId) {
    dispatch({ type: "delete-todo", deleteId: deleteId });
  }

  const value = {
    todos: todos,
    onAddTodo: handleAddTodo,
    onEditTodo: handleEditTodo,
    onDeleteTodo: handleDeleteTodo,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

export default TodoProvider;
