import ExpenseDate from "../ExpenseDate/ExpenseDate";

function ExpenseList({ expenses, onDeleteExpense }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Index</th>
          <th>Title</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Delete Button</th>
        </tr>
      </thead>
      <tbody>
        {expenses.length === 0 ? (
          <tr>
            <td colSpan="5">No expenses found</td>
          </tr>
        ) : (
          <>
            {expenses.map((expense, index) => (
              <tr key={expense.id}>
                <td>{index}</td>
                <td>{expense.title}</td>
                <td>${expense.amount}</td>
                <td>
                  <ExpenseDate date={expense.date} />
                </td>
                <td>
                  <button
                    onClick={() => {
                      onDeleteExpense(expense.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </>
        )}
      </tbody>
    </table>
  );
}

export default ExpenseList;
