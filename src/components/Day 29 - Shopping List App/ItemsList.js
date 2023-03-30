const ItemsList = ({ items }) => {
  const total = items.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  return (
    <table>
      <thead>
        <tr>
          <th>Index</th>
          <th>Is Selected</th>
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
            <td>
              <input type="checkbox" checked={item.isSelected} />
            </td>
            <td>
              {item.isSelected ? <p>{item.title}</p> : <p>{item.title}</p>}
            </td>
            <td>{item.quantity}</td>
            <td>
              <button>Increment</button>
            </td>
            <td>
              <button>Decrement</button>
            </td>
          </tr>
        ))}
        <td colSpan="6">
          <h3>Total Quantity : {total} </h3>
        </td>
      </tbody>
    </table>
  );
};

export default ItemsList;
