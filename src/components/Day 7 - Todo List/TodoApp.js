import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import { useState } from "react";
import uuid from "react-uuid";

const initialTodos = [
  { id: uuid(), title: "Buy Milk", done: true },
  { id: uuid(), title: "Eat Tacos", done: false },
  { id: uuid(), title: "Brew Tea", done: false },
];

const TodoApp = () => {
  const [todos, setTodos] = useState(initialTodos);

  const handleAddTodo = ({ title }) => {
    const newTodo = {
      id: uuid(),
      title: title,
      done: false,
    };
    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = (deleteId) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.filter((todo) => deleteId !== todo.id);
      return updatedTodos;
    });
  };

  const handleTodoChange = (nextTodo) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((todo) => {
        return nextTodo.id === todo.id ? nextTodo : todo;
      });
      return updatedTodos;
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
