import ExpenseDate from "../ExpenseDate/ExpenseDate";

function ExpenseItem({ index, expense }) {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{expense.title}</td>
      <td>${expense.amount}</td>
      <td>
        <ExpenseDate expenseDate={expense.date} />
      </td>
      <td>
        <button>Edit Expense</button>
      </td>
      <td>
        <button>Delete Expense</button>
      </td>
    </tr>
  );
}

export default ExpenseItem;
