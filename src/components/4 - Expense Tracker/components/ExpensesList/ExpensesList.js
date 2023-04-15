import ExpenseItem from "../ExpenseItem/ExpenseItem";

function ExpensesList({ expenses }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Index</th>
          <th>Title</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Edit Button</th>
          <th>Delete Button</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense, index) => (
          <ExpenseItem key={expense.id} index={index} expense={expense} />
        ))}
      </tbody>
    </table>
  );
}

export default ExpensesList;
