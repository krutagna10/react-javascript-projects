import ExpensesContext from "./ExpensesContext";
import { useReducer } from "react";
import INITIAL_EXPENSES from "../data";

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

function ExpensesProvider({ children }) {
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

  const value = {
    expenses: expenses,
    onAddExpense: handleAddExpense,
    onEditExpense: handleEditExpense,
    onDeleteExpense: handleDeleteExpense,
    onResetExpenses: handleResetExpenses,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesProvider;
