import AddExpense from "./AddExpense";
import ExpenseList from "./ExpenseList";
import ExpensesTable from "./ExpensesTable";
import { useState } from "react";

const INITIAL_EXPENSES = [
  { id: crypto.randomUUID(), title: "Food", amount: 50 },
  { id: crypto.randomUUID(), title: "Movie", amount: 30 },
];

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);
  const [income, setIncome] = useState(0);

  const handleAddExpense = ({ title, amount }) => {
    const newExpense = {
      id: crypto.randomUUID(),
      title: title,
      amount: Number(amount),
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

  const handleIncomeChange = (event) => {
    setIncome(event.target.value);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Expense Tracker</h1>
      <input
        type="number"
        placeholder="Enter your income"
        style={{ width: "100%" }}
        onChange={handleIncomeChange}
      />
      <ExpensesTable income={income} expenses={expenses} />
      <h2 style={{ textAlign: "center" }}>Expense List</h2>
      <AddExpense onAddExpense={handleAddExpense} />
      <ExpenseList expenses={expenses} onDeleteExpense={handleDeleteExpense} />
    </div>
  );
};

export default ExpenseTracker;
