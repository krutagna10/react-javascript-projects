import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import { useReducer, useState } from "react";

const initialTodos = [
  { id: crypto.randomUUID(), title: "Buy Milk", done: true },
  { id: crypto.randomUUID(), title: "Eat Tacos", done: false },
  { id: crypto.randomUUID(), title: "Brew Tea", done: false },
];

function reducer(todos, action) {
  switch (action.type) {
    case "add-todo": {
      const newTodo = {
        id: crypto.randomUUID(),
        title: action.title,
        done: false,
      };
      return [...todos, newTodo];
    }

    case "delete-todo": {
      const nextTodos = todos.filter((todo) => {
        return todo.id !== action.deleteId;
      });
      return nextTodos;
    }

    case "change-todo": {
      const nextTodos = todos.map((todo) => {
        return todo.id === action.nextTodo.id ? action.nextTodo : todo;
      });
      return nextTodos;
    }

    default: {
      throw Error("Invalid action: " + action.type);
    }
  }
}

const TodoApp = () => {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const handleAddTodo = ({ title }) => {
    dispatch({ type: "add-todo", title: title });
  };

  const handleDeleteTodo = (deleteId) => {
    dispatch({ type: "delete-todo", deleteId: deleteId });
  };

  const handleTodoChange = (nextTodo) => {
    dispatch({ type: "change-todo", nextTodo: nextTodo });
  };

  return (
    <div className="todo">
      <AddTodo onAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        onDeleteTodo={handleDeleteTodo}
        onTodoChange={handleTodoChange}
      />
    </div>
  );
};

export default TodoApp;
