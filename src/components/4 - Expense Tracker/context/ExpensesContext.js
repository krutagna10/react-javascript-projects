import { createContext } from "react";

const ExpensesContext = createContext({
  expenses: [],
  onAddExpense: (title, amount, date) => {},
  onEditExpense: (editedExpense) => {},
  onDeleteExpense: (deleteId) => {},
  onResetExpenses: () => {},
});

export default ExpensesContext;
