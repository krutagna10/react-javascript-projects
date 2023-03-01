import React, { useState } from "react";

const ExpenseItem = ({ index, expense, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleTitleChange = (event) => {
    onEdit({ ...expense, title: event.target.value });
  };

  const handleAmountChange = (event) => {
    onEdit({ ...expense, amount: event.target.value });
  };

  const handleDelete = () => {
    onDelete(expense.id);
  };

  const handleClick = () => {
    setIsEditing((prevIsEditing) => !prevIsEditing);
  };

  const content = isEditing ? (
    <React.Fragment>
      <td>
        <input
          type="text"
          onChange={handleTitleChange}
          value={expense.title}
          placeholder="Title"
          style={{ width: "100%" }}
        />
      </td>
      <td>
        <input
          type="number"
          onChange={handleAmountChange}
          value={expense.amount}
          placeholder="Amount"
          style={{ width: "100%" }}
        />
      </td>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <td>{expense.title}</td>
      <td>{expense.amount}</td>
    </React.Fragment>
  );

  return (
    <tr>
      <td>{index}</td>
      {content}
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
            <td colSpan="4">No Expense found</td>
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
