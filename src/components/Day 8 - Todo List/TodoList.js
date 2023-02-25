const TodoListHeader = () => {
  return (
    <thead>
      <tr>
        <th>Index</th>
        <th>Title</th>
        <th>Done</th>
        <th>Delete</th>
      </tr>
    </thead>
  );
};

const TodoList = ({ todos, onDeleteTodo }) => {
  return (
    <table>
      <TodoListHeader />
      <tbody>
        {todos.length === 0 ? (
          <tr>
            <td colSpan="5">No Tasks</td>
          </tr>
        ) : (
          <>
            {todos.map((todo, index) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{todo.title}</td>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <button
                    onClick={() => {
                      onDeleteTodo(index);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </>
        )}
      </tbody>
    </table>
  );
};

export default TodoList;
