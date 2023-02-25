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

  const handleTaskDoneChange = (editIndex, nextDone) => {
    const nextTodos = todos.map((todo, index) => {
      return editIndex === index ? { ...todo, done: nextDone } : todo;
    });
    setTodos([...nextTodos]);
  };

  return (
    <div className="todo">
      <AddTodo onAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        onDeleteTodo={handleDeleteTodo}
        onTaskDoneChange={handleTaskDoneChange}
      />
    </div>
  );
};

export default TodoApp;
