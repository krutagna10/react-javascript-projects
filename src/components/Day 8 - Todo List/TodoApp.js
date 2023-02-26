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
    const nextTodos = todos.filter((todo) => deleteId !== todo.id);
    setTodos([...nextTodos]);
  };

  const handleTodoChange = (nextTodo) => {
    const nextTodos = todos.map((todo) => {
      return nextTodo.id === todo.id ? nextTodo : todo;
    });

    setTodos([...nextTodos]);
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
