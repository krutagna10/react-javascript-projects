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
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "row", gap: "0.75rem" }}
    >
      <input
        type="text"
        onChange={handleTitleChange}
        value={title}
        required
        placeholder="Title"
        style={{ width: "100%" }}
      />
      <input
        type="number"
        onChange={handleAmountChange}
        value={amount}
        required
        placeholder="Amount"
        style={{ width: "100%" }}
      />
      <button>Submit</button>
    </form>
  );
};

export default AddExpense;
