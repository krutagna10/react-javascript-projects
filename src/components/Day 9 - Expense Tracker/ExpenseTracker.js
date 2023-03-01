import AddExpense from "./AddExpense";
import ExpenseList from "./ExpenseList";
import { useState } from "react";

const INITIAL_EXPENSES = [
  { id: crypto.randomUUID(), name: "Food", amount: 50 },
  { id: crypto.randomUUID(), name: "Movie", amount: 30 },
];

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const handleAddExpense = ({ name, amount }) => {
    const newExpense = {
      id: crypto.randomUUID(),
      name: name,
      amount: amount,
    };
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };

  const handleDeleteExpense = (deleteId) => {
    setExpenses((prevExpenses) => {
      const updatedExpenses = prevExpenses.filter(
        (expense) => deleteId !== expense.id
      );
      return updatedExpenses;
    });
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Expense Tracker</h1>
      <AddExpense onAddExpense={handleAddExpense} />
      <ExpenseList expenses={expenses} onDeleteExpense={handleDeleteExpense} />
    </div>
  );
};

export default ExpenseTracker;
