const ItemsList = ({ items }) => {
  const total = items.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  return (
    <table>
      <thead>
        <tr>
          <th>Index</th>
          <th>Title</th>
          <th>Quantity</th>
          <th>Increment Button</th>
          <th>Decrement Button</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={item.id}>
            <td>{index}</td>
            <td>{item.title}</td>
            <td>{item.quantity}</td>
            <td>
              <button>Increment</button>
            </td>
            <td>
              <button>Decrement</button>
            </td>
          </tr>
        ))}
        <td colSpan="5">
          <h3>Total Quantity : {total} </h3>
        </td>
      </tbody>
    </table>
  );
};

export default ItemsList;
