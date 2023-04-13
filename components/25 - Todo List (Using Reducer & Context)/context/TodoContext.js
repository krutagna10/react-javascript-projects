import { createContext } from "react";

const TodosContext = createContext({
  todos: [],
  onAddTodo: (title) => {},
  onEditTodo: (editedTodo) => {},
  onDeleteTodo: (deleteId) => {},
});

export default TodosContext;
