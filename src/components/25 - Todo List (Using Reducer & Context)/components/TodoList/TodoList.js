import React, { useContext } from "react";
import TodoContext from "../../context/TodoContext";
import TodoItem from "../TodoItem/TodoItem";

function TodoList() {
  const { todos } = useContext(TodoContext);

  return (
    <table>
      <thead>
        <tr>
          <th>Index</th>
          <th>Title</th>
          <th>Completed</th>
          <th>Edit/Save Button</th>
          <th>Delete Button</th>
        </tr>
      </thead>
      <tbody>
        {todos.length === 0 ? (
          <tr>
            <td colSpan="5">No Tasks Found</td>
          </tr>
        ) : (
          <>
            {todos.map((todo, index) => (
              <TodoItem key={todo.id} index={index} todo={todo} />
            ))}
          </>
        )}
      </tbody>
    </table>
  );
}

export default TodoList;
