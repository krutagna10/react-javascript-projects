import { useState } from "react";

const AddExpense = ({ onAddExpense }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddExpense({
      title: title,
      amount: amount,
    });
    setTitle("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleTitleChange}
        value={title}
        required
        placeholder="Title"
      />
      <input
        type="number"
        onChange={handleAmountChange}
        value={amount}
        required
        placeholder="Amount"
      />
      <button>Submit</button>
    </form>
  );
};

export default AddExpense;
