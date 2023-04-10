function GithubUserList({ users }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Index</th>
          <th>Username</th>
          <th>Github Link</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td>{index}</td>
            <td>{user.login}</td>
            <td>
              <a href={user.html_url}>{user.html_url}</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default GithubUserList;
