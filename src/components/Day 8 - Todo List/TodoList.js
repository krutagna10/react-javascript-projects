const TodoList = ({ todos, onDeleteTodo }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Index</th>
          <th>Title</th>
          <th>Done</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
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
                  <button>Edit</button>
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
