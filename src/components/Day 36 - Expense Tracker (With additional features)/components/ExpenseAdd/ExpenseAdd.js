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
    console.log(event.target.value);
    setDate(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    onAddExpense({
      title: title,
      amount: amount,
      date: date,
    });

    setTitle("");
    setAmount("");
    setDate("");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2 className="text--center">Add Expense</h2>
      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        placeholder="Enter Title"
        required
      />
      <input
        type="number"
        value={amount}
        onChange={handleAmountChange}
        placeholder="Enter Amount"
        required
      />
      <input type="date" value={date} onChange={handleDateChange} required />
      <button>Add Expense</button>
    </form>
  );
}

export default ExpenseAdd;
