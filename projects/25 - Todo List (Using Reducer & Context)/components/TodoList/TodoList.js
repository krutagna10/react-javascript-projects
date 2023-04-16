import React, { useContext } from "react";
import TodoItem from "../TodoItem/TodoItem";

function TodoList({ todos }) {
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
