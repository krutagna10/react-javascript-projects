const ExpensesTable = ({ income, expenses }) => {
  const expense = expenses.reduce((acc, expense) => {
    return acc + expense.amount;
  }, 0);

  return (
    <table style={{ marginBottom: "3rem" }}>
      <thead>
        <tr>
          <th>Income</th>
          <th>Expense</th>
          <th>Balance</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ color: "green" }}>${income}</td>
          <td style={{ color: "red" }}>${expense}</td>
          <td>${income - expense}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ExpensesTable;
