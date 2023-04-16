import ExpensesContext from "../../context/ExpensesContext";
import ExpensesList from "../ExpensesList/ExpensesList";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import { useState, useContext } from "react";

function Expenses() {
  const { expenses } = useContext(ExpensesContext);

  const [searchTerm, setSearchTerm] = useState("");
  const [isSorted, setIsSorted] = useState(false);

  function handleSearchTermChange(nextSearchTerm) {
    setSearchTerm(nextSearchTerm);
  }

  function handleIsSortedChange(nextIsSorted) {
    setIsSorted(nextIsSorted);
  }

  let filteredExpenses = expenses.filter((expense) => {
    return expense.title.toLowerCase().includes(searchTerm);
  });

  if (isSorted) {
    filteredExpenses = [...filteredExpenses].sort((expenseA, expenseB) => {
      return expenseA.amount - expenseB.amount;
    });
  }

  return (
    <div>
      <h2>Expenses List</h2>
      <ExpensesFilter
        onSearchTermChange={handleSearchTermChange}
        onIsSortedChange={handleIsSortedChange}
      />
      <ExpensesList expenses={filteredExpenses} />
    </div>
  );
}

export default Expenses;
