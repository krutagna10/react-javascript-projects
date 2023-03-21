import React, { useContext, useState } from "react";
import { TodosContext } from "../../TodoContext";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = () => {
  const todos = useContext(TodosContext);

  return (
    <table>
      <thead>
        <tr>
          <th>Index</th>
          <th>Title</th>
          <th>Done</th>
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
          <React.Fragment>
            {todos.map((todo, index) => (
              <TodoItem key={todo.id} todo={todo} index={index} />
            ))}
          </React.Fragment>
        )}
      </tbody>
    </table>
  );
};

export default TodoList;
