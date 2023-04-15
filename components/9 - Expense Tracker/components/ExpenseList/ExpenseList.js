import React, { useState } from "react";

const ExpenseItem = ({ index, expense }) => {
  const [title, setTitle] = useState(expense.title);
  const [amount, setAmount] = useState(expense.amount);
  const [isEditing, setIsEditing] = useState(false);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleDelete = () => {
    onDelete(expense.id);
  };

  const handleClick = () => {
    if (isEditing) {
      setIsEditing(false);
      onEdit({ ...expense, title: title, amount: Number(amount) });
    } else {
      setIsEditing(true);
    }
  };

  return (
    <tr>
      <td>{index}</td>
      <td>
        {isEditing ? (
          <input
            type="text"
            onChange={handleTitleChange}
            value={title}
            placeholder="Title"
            style={{ width: "100%" }}
          />
        ) : (
          <React.Fragment>{expense.title}</React.Fragment>
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type="number"
            onChange={handleAmountChange}
            value={amount}
            placeholder="Amount"
            style={{ width: "100%" }}
          />
        ) : (
          <React.Fragment>${expense.amount}</React.Fragment>
        )}
      </td>
      <td>
        <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
      </td>
      <td>
        <button onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
};

const ExpenseList = ({ expenses, onDeleteExpense, onEditExpense }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Index</th>
          <th>Title</th>
          <th>Amount</th>
          <th>Edit / Save Button</th>
          <th>Delete Button</th>
        </tr>
      </thead>
      <tbody>
        {expenses.length === 0 ? (
          <tr>
            <td colSpan="5">No Expense found</td>
          </tr>
        ) : (
          <React.Fragment>
            {expenses.map((expense, index) => (
              <ExpenseItem
                key={expense.id}
                expense={expense}
                index={index}
                onDelete={onDeleteExpense}
                onEdit={onEditExpense}
              />
            ))}
          </React.Fragment>
        )}
      </tbody>
    </table>
  );
};

export default ExpenseList;
