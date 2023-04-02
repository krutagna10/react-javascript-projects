function TabsTable({ jobs, index }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Index</th>
          <th>Company</th>
          <th>Date</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{index + 1}</td>
          <td>{jobs[index].company}</td>
          <td>{jobs[index].dates}</td>
          <td>{jobs[index].title}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default TabsTable;
