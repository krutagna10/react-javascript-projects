import { useState } from "react";

function ExpenseAdd({ onAddExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleAmountChange(event) {
    setAmount(event.target.value);
  }

  function handleDateChange(event) {
    setDate(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Calling onAddExpense with title, amount and date as parameters
    onAddExpense(title, amount, date);

    // Resetting the values
    setTitle("");
    setAmount("");
    setDate("");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        onChange={handleTitleChange}
        value={title}
        required
      />
      <input
        type="amount"
        placeholder="Amount"
        onChange={handleAmountChange}
        value={amount}
        required
      />
      <input type="date" onChange={handleDateChange} value={date} required />
      <button>Add Expense</button>
    </form>
  );
}

export default ExpenseAdd;
