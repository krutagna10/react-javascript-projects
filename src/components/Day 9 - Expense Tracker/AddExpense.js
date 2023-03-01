import { useState } from "react";

const AddExpense = ({ onAddExpense }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddExpense({
      name: name,
      amount: amount,
    });
    setName("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleNameChange}
        value={name}
        required
        placeholder="Name"
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
