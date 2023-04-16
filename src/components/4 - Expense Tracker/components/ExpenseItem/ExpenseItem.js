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

  function handleDateChange(event) {
    const editedExpenses = { ...expense, date: new Date(event.target.value) };
    onEditExpense(editedExpenses);
  }

  function handleDeleteExpense() {
    onDeleteExpense(expense.id);
  }

  const day = expense.date.getDate().toString().padStart(2, "0");
  const month = (expense.date.getMonth() + 1).toString().padStart(2, "0");
  const year = expense.date.getFullYear();
  const dateString = `${year}-${month}-${day}`;

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
          <input type="date" value={dateString} onChange={handleDateChange} />
        ) : (
          <ExpenseDate expenseDate={expense.date} />
        )}
      </td>
      <td>
        <button onClick={toggleIsEditing}>{isEditing ? "Save" : "Edit"}</button>
      </td>
      <td>
        <button onClick={handleDeleteExpense}>Delete</button>
      </td>
    </tr>
  );
}

export default ExpenseItem;
