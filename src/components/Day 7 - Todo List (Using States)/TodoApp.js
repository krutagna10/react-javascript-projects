import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import { useReducer, useState } from "react";

const initialTodos = [
  { id: crypto.randomUUID(), title: "Buy Milk", done: true },
  { id: crypto.randomUUID(), title: "Eat Tacos", done: false },
  { id: crypto.randomUUID(), title: "Brew Tea", done: false },
];

const TodoApp = () => {
  const [todos, setTodos] = useState(initialTodos);

  const handleAddTodo = ({ title }) => {
    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      done: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const handleDeleteTodo = (deleteId) => {
    setTodos((prevTodos) => {
      const nextTodos = prevTodos.filter((todo) => {
        return deleteId !== todo.id;
      });
      return nextTodos;
    });
  };

  const handleTodoChange = (nextTodo) => {
    setTodos((prevTodos) => {
      const nextTodos = prevTodos.map((todo) => {
        return nextTodo.id === todo.id ? nextTodo : todo;
      });
      return nextTodos;
    });
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
