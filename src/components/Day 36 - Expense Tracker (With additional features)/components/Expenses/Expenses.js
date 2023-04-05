import ExpenseList from "../ExpenseList/ExpenseList";
import { useContext, useState } from "react";
import { ExpensesContext } from "../../context/ExpensesContext";

function Expenses({ onDeleteExpense }) {
  const { expenses } = useContext(ExpensesContext);
  const [sortByAmount, setSortByAmount] = useState(false);

  function handleSortByAmountChange(event) {
    setSortByAmount(event.target.checked);
  }

  let sortedExpenses = [...expenses];
  if (sortByAmount) {
    sortedExpenses = sortedExpenses.sort((expenseA, expenseB) => {
      return expenseA.amount - expenseB.amount;
    });
  }

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Expenses List</h2>
      <form className="flex flex--center">
        <input type="text" placeholder="Search Expense..." />
        <label>
          Sort by Amount:{" "}
          <input type="checkbox" onChange={handleSortByAmountChange} />
        </label>
        <label>
          Sort by Date: <input type="checkbox" />
        </label>
      </form>
      <ExpenseList
        expenses={sortedExpenses}
        onDeleteExpense={onDeleteExpense}
      />
    </div>
  );
}

export default Expenses;
