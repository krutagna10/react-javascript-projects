import Expenses from "./components/Expenses/Expenses";
import ExpenseAdd from "./components/ExpenseAdd/ExpenseAdd";
import INITIAL_EXPENSES from "./data";
import { useReducer, useState } from "react";

function reducer(expenses, action) {
  switch (action.type) {
    case "add-expense": {
      return [...expenses, action.newExpense];
    }
    case "edit-expense": {
      const updatedExpenses = expenses.map((expense) => {
        return action.editedExpense.id === expense.id
          ? action.editedExpense
          : expense;
      });
      return updatedExpenses;
    }
    case "delete-expense": {
      const updatedExpenses = expenses.filter((expense) => {
        return action.deleteId !== expense.id;
      });
      return updatedExpenses;
    }
    case "reset-expenses": {
      return [];
    }
    default: {
      throw new Error("Invalid action: " + action.type);
    }
  }
}

function ExpenseTracker() {
  const [expenses, dispatch] = useReducer(reducer, INITIAL_EXPENSES);

  function handleAddExpense(title, amount, date) {
    const newExpense = {
      id: crypto.randomUUID(),
      title: title,
      amount: amount,
      date: new Date(date),
    };
    dispatch({ type: "add-expense", newExpense: newExpense });
  }

  function handleEditExpense(editedExpense) {
    dispatch({ type: "edit-expense", editedExpense: editedExpense });
  }

  function handleDeleteExpense(deleteId) {
    dispatch({ type: "delete-expense", deleteId: deleteId });
  }

  function handleResetExpenses() {
    dispatch({ type: "reset-expenses" });
  }

  return (
    <div className="width-200">
      <h1>Expense Tracker</h1>
      <ExpenseAdd onAddExpense={handleAddExpense} />
      <Expenses
        expenses={expenses}
        onEditExpense={handleEditExpense}
        onDeleteExpense={handleDeleteExpense}
        onResetExpenses={handleResetExpenses}
      />
    </div>
  );
}

export default ExpenseTracker;
