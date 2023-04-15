import ExpensesList from "../ExpensesList/ExpensesList";

function Expenses({ expenses, onEditExpense, onDeleteExpense }) {
  return (
    <div>
      <h2>Expenses List</h2>
      <ExpensesList
        expenses={expenses}
        onEditExpense={onEditExpense}
        onDeleteExpense={onDeleteExpense}
      />
    </div>
  );
}

export default Expenses;
