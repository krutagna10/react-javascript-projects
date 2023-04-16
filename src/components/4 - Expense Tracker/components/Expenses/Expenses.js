import ExpensesContext from "../../context/ExpensesContext";
import ExpensesList from "../ExpensesList/ExpensesList";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import { useState, useContext } from "react";

function Expenses() {
  const { expenses } = useContext(ExpensesContext);
  const [sortBy, setSortBy] = useState("");

  const [searchTerm, setSearchTerm] = useState("");

  function handleSearchTermChange(nextSearchTerm) {
    setSearchTerm(nextSearchTerm);
  }

  function handleSortByChange(nextSortBy) {
    setSortBy(nextSortBy);
  }

  let filteredExpenses = expenses.filter((expense) => {
    return expense.title.toLowerCase().includes(searchTerm);
  });

  if (sortBy === "amount") {
    filteredExpenses = [...filteredExpenses].sort((expenseA, expenseB) => {
      return expenseA.amount - expenseB.amount;
    });
  }

  if (sortBy === "date") {
    filteredExpenses = [...filteredExpenses].sort((expenseA, expenseB) => {
      return expenseA.date - expenseB.date;
    });
  }

  return (
    <div>
      <h2>Expenses List</h2>
      <ExpensesFilter
        onSearchTermChange={handleSearchTermChange}
        onSortByChange={handleSortByChange}
      />
      <ExpensesList expenses={filteredExpenses} />
    </div>
  );
}

export default Expenses;
