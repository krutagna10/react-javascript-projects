const ItemsList = ({
  items,
  onQuantityIncrement,
  onQuantityDecrement,
  onDeleteItem,
}) => {
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
          <th>Delete Button</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={item.id}>
            <td>{index}</td>
            <td>{item.title}</td>
            <td>{item.quantity}</td>
            <td>
              <button
                onClick={() => {
                  onQuantityIncrement(item.id);
                }}
              >
                Increment
              </button>
            </td>
            <td>
              <button
                onClick={() => {
                  onQuantityDecrement(item.id);
                }}
              >
                Decrement
              </button>
            </td>
            <td>
              <button
                onClick={() => {
                  onDeleteItem(item.id);
                }}
              >
                Delete
              </button>
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
