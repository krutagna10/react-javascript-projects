const ExpenseItem = ({ id, index, name, amount, onDelete }) => {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <tr>
      <td>{index}</td>
      <td>{name}</td>
      <td>${amount}</td>
      <td>
        <button onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
};

const ExpenseList = ({ expenses, onDeleteExpense }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Index</th>
          <th>Name</th>
          <th>Amount</th>
          <th>Delete Button</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense, index) => (
          <ExpenseItem
            key={expense.id}
            {...expense}
            index={index}
            onDelete={onDeleteExpense}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseList;
