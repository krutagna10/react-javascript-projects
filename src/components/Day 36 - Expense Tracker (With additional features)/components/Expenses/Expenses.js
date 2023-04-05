import ExpenseList from "../ExpenseList/ExpenseList";
import { useContext, useState } from "react";
import { ExpensesContext } from "../../context/ExpensesContext";

function Expenses({ onDeleteExpense }) {
  const { expenses } = useContext(ExpensesContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortByAmount, setSortByAmount] = useState(false);

  function handleSearchTermChange(event) {
    setSearchTerm(event.target.value.toLowerCase());
  }

  function handleSortByAmountChange(event) {
    setSortByAmount(event.target.checked);
  }

  let modifiedExpenses = expenses.filter((expense) => {
    return expense.title.toLowerCase().includes(searchTerm);
  });

  if (sortByAmount) {
    modifiedExpenses = modifiedExpenses.sort((expenseA, expenseB) => {
      return expenseA.amount - expenseB.amount;
    });
  }

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Expenses List</h2>
      <form className="flex flex--center">
        <input
          type="text"
          placeholder="Search Expense..."
          onChange={handleSearchTermChange}
        />
        <label>
          Sort by Amount:{" "}
          <input type="checkbox" onChange={handleSortByAmountChange} />
        </label>
      </form>
      <ExpenseList
        expenses={modifiedExpenses}
        onDeleteExpense={onDeleteExpense}
      />
    </div>
  );
}

export default Expenses;
