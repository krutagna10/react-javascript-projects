import ExpenseDate from "../ExpenseDate/ExpenseDate";
import { useState } from "react";

function ExpenseItem({ index, expense, onEditExpense, onDeleteExpense }) {
  const [isEditing, setIsEditing] = useState(false);

  function toggleIsEditing() {
    setIsEditing((prevIsEditing) => !prevIsEditing);
  }

  function handleTitleChange(event) {
    const editedExpense = { ...expense, title: event.target.value };
    onEditExpense(editedExpense);
  }

  function handleAmountChange(event) {
    const editedExpense = { ...expense, amount: Number(event.target.value) };
    onEditExpense(editedExpense);
  }

  function handleDeleteExpense() {
    onDeleteExpense(expense.id);
  }

  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        {isEditing ? (
          <input
            type="text"
            value={expense.title}
            placeholder="Title"
            onChange={handleTitleChange}
          />
        ) : (
          <>{expense.title}</>
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type="number"
            value={expense.amount}
            placeholder="Amount"
            onChange={handleAmountChange}
          />
        ) : (
          <>{expense.amount}</>
        )}
      </td>
      <td>
        {isEditing ? (
          <input type="date" value={expense.date} />
        ) : (
          <ExpenseDate expenseDate={expense.date} />
        )}
      </td>
      <td>
        <button onClick={toggleIsEditing}>
          {isEditing ? "Save" : "Edit"} Expense
        </button>
      </td>
      <td>
        <button onClick={handleDeleteExpense}>Delete Expense</button>
      </td>
    </tr>
  );
}

export default ExpenseItem;
