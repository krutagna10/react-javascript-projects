import React from "react";

const ExpenseItem = ({ id, index, title, amount, onDelete }) => {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <tr>
      <td>{index}</td>
      <td>{title}</td>
      <td>${amount}</td>
      <td>
        <button onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
};

const ExpenseList = ({ expenses, onDeleteExpense }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Index</th>
          <th>Title</th>
          <th>Amount</th>
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
                {...expense}
                index={index}
                onDelete={onDeleteExpense}
              />
            ))}
          </React.Fragment>
        )}
      </tbody>
    </table>
  );
};

export default ExpenseList;
