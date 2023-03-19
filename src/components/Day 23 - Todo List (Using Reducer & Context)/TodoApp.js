import { useReducer } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

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
        return action.newTodo.id === todo.id ? action.newTodo : todo;
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

  const handleAddTodo = (title) => {
    dispatch({ type: "add-todo", title: title });
  };

  const handleDeleteTodo = (deleteId) => {
    dispatch({ type: "delete-todo", deleteId: deleteId });
  };

  const handleChangeTodo = (newTodo) => {
    dispatch({ type: "change-todo", newTodo: newTodo });
  };

  return (
    <div>
      <h1>Todo App</h1>
      <AddTodo onAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        onDeleteTodo={handleDeleteTodo}
        onChangeTodo={handleChangeTodo}
      />
    </div>
  );
};

export default TodoApp;
