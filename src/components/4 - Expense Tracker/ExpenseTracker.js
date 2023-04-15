import Expenses from "./components/Expenses/Expenses";
import ExpenseAdd from "./components/ExpenseAdd/ExpenseAdd";
import INITIAL_EXPENSES from "./data";
import { useState } from "react";

function ExpenseTracker() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  function handleAddExpense(title, amount, date) {
    const newExpense = {
      id: crypto.randomUUID(),
      title: title,
      amount: amount,
      date: new Date(date),
    };
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  }

  function handleEditExpense(editedExpense) {
    setExpenses((prevExpenses) => {
      const updatedExpenses = prevExpenses.map((expense) => {
        return editedExpense.id === expense.id ? editedExpense : expense;
      });
      return updatedExpenses;
    });
  }

  function handleDeleteExpense(deleteId) {
    setExpenses((prevExpenses) => {
      const updatedExpenses = prevExpenses.filter((expense) => {
        return deleteId !== expense.id;
      });
      return updatedExpenses;
    });
  }

  return (
    <div>
      <h1>Expense Tracker</h1>
      <ExpenseAdd onAddExpense={handleAddExpense} />
      <Expenses
        expenses={expenses}
        onEditExpense={handleEditExpense}
        onDeleteExpense={handleDeleteExpense}
      />
    </div>
  );
}

export default ExpenseTracker;
