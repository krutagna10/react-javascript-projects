import { createContext } from "react";

const TodosContext = createContext({
  todos: [],
  onAddTodo: (title) => {},
  onDeleteTodo: (deleteId) => {},
});

export default TodosContext;
