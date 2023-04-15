import ExpensesList from "../ExpensesList/ExpensesList";

function Expenses({ expenses }) {
  return (
    <div>
      <h2>Expenses List</h2>
      <ExpensesList expenses={expenses} />
    </div>
  );
}

export default Expenses;
