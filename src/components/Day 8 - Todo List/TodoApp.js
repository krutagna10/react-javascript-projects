import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import { useState } from "react";

const initialTodos = [
  { title: "Buy Milk", done: true },
  { title: "Eat Tacos", done: false },
  { title: "Brew Tea", done: false },
];

const TodoApp = () => {
  const [todos, setTodos] = useState(initialTodos);

  const handleAddTodo = ({ title }) => {
    const newTodo = {
      title: title,
      done: false,
    };
    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = (deleteIndex) => {
    const nextTodos = todos.filter((_, index) => deleteIndex !== index);
    setTodos([...nextTodos]);
  };

  const handleDoneChange = (editIndex, nextDone) => {};

  return (
    <div className="todo">
      <AddTodo onAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        onDeleteTodo={handleDeleteTodo}
        onDoneChange={handleDoneChange}
      />
    </div>
  );
};

export default TodoApp;
