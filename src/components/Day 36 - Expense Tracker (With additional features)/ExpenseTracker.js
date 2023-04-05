import ExpenseAdd from "./components/ExpenseAdd/ExpenseAdd";
import Expenses from "./components/Expenses/Expenses";
import { ExpensesContext } from "./context/ExpensesContext";
import { useReducer } from "react";
import INITIAL_EXPENSES from "./data";

function reducer(expenses, action) {
  switch (action.type) {
    case "add-expense": {
      return [...expenses, action.newExpense];
    }
    case "delete-expense": {
      const nextExpenses = expenses.filter((expense) => {
        return action.deleteId !== expense.id;
      });
      return nextExpenses;
    }
    default: {
      throw new Error("Invalid action " + action.type);
    }
  }
}

function ExpenseTracker() {
  const [expenses, dispatch] = useReducer(reducer, INITIAL_EXPENSES);

  function handleAddExpense({ title, amount, date }) {
    const newExpense = {
      id: crypto.randomUUID(),
      title: title,
      amount: amount,
      date: new Date(date),
    };
    dispatch({ type: "add-expense", newExpense: newExpense });
  }

  function handleDeleteExpense(deleteId) {
    dispatch({ type: "delete-expense", deleteId: deleteId });
  }

  return (
    <div>
      <ExpensesContext.Provider value={{ expenses: expenses }}>
        <h1 className="text--center">Expense Tracker</h1>
        <ExpenseAdd onAddExpense={handleAddExpense} />
        <Expenses onDeleteExpense={handleDeleteExpense} />
      </ExpensesContext.Provider>
    </div>
  );
}

export default ExpenseTracker;
