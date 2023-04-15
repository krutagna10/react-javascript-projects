import Expenses from "./components/Expenses/Expenses";
import ExpenseAdd from "./components/ExpenseAdd/ExpenseAdd";
import INITIAL_EXPENSES from "./data";
import { useState } from "react";

function ExpenseTracker() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  return (
    <div>
      <h1>Expense Tracker</h1>
      <ExpenseAdd />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default ExpenseTracker;
