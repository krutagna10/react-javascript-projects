import ExpensesList from "../ExpensesList/ExpensesList";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import { useState } from "react";

function Expenses({ expenses, onEditExpense, onDeleteExpense }) {
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

  console.log({ searchTerm, isSorted });

  return (
    <div>
      <h2>Expenses List</h2>
      <ExpensesFilter
        onSearchTermChange={handleSearchTermChange}
        onIsSortedChange={handleIsSortedChange}
      />
      <ExpensesList
        expenses={filteredExpenses}
        onEditExpense={onEditExpense}
        onDeleteExpense={onDeleteExpense}
      />
    </div>
  );
}

export default Expenses;
