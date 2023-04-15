import ExpenseItem from "../ExpenseItem/ExpenseItem";

function ExpensesList({ expenses, onEditExpense, onDeleteExpense }) {
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
        {expenses.length === 0 ? (
          <tr>
            <td colSpan="6">No Expenses Remaining</td>
          </tr>
        ) : (
          <>
            {expenses.map((expense, index) => (
              <ExpenseItem
                key={expense.id}
                index={index}
                expense={expense}
                onEditExpense={onEditExpense}
                onDeleteExpense={onDeleteExpense}
              />
            ))}
          </>
        )}
      </tbody>
    </table>
  );
}

export default ExpensesList;
