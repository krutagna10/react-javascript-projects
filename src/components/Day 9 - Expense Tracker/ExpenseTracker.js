import AddExpense from "./components/AddExpense/AddExpense";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import { useReducer } from "react";

const INITIAL_EXPENSES = [
  {
    id: crypto.randomUUID(),
    title: "Food",
    amount: 50,
    date: new Date(2023, 0, 31),
  },
  {
    id: crypto.randomUUID(),
    title: "Movie",
    amount: 30,
    date: new Date(2023, 1, 28),
  },
];

function reducer(expenses, action) {
  switch (action.type) {
    case "add-expense": {
      const newExpense = {
        id: crypto.randomUUID(),
        title: action.title,
        amount: action.amount,
      };
      return [...expenses, newExpense];
    }

    case "delete-expense": {
      const nextExpenses = expenses.filter((expense) => {
        return expense.id !== action.deleteId;
      });
      return nextExpenses;
    }

    case "edit-expense": {
      const nextExpenses = expenses.map((expense) => {
        return expense.id === action.editedExpense.id
          ? action.editedExpense
          : expense;
      });
      return nextExpenses;
    }

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

const ExpenseTracker = () => {
  const [expenses, dispatch] = useReducer(reducer, INITIAL_EXPENSES);

  const handleAddExpense = ({ title, amount }) => {
    dispatch({ type: "add-expense", title: title, amount: amount });
  };

  const handleDeleteExpense = (deleteId) => {
    dispatch({ type: "delete-expense", deleteId: deleteId });
  };

  const handleEditExpense = (editedExpense) => {
    dispatch({ type: "edit-expense", editedExpense: editedExpense });
  };

  return (
    <div style={{ maxWidth: "36rem" }}>
      <h1 style={{ textAlign: "center" }}>Expense Tracker</h1>
      <AddExpense onAddExpense={handleAddExpense} />
      <ExpenseList
        expenses={expenses}
        onDeleteExpense={handleDeleteExpense}
        onEditExpense={handleEditExpense}
      />
    </div>
  );
};

export default ExpenseTracker;
