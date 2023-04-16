import ExpensesProvider from "./context/ExpensesProvider";
import Expenses from "./components/Expenses/Expenses";
import ExpenseAdd from "./components/ExpenseAdd/ExpenseAdd";
import INITIAL_EXPENSES from "./data";
import { useReducer, useState } from "react";

function ExpenseTracker() {
  return (
    <div className="width-200">
      <ExpensesProvider>
        <h1>Expense Tracker</h1>
        <ExpenseAdd />
        <Expenses />
      </ExpensesProvider>
    </div>
  );
}

export default ExpenseTracker;
