import { useState } from "react";

function BirthdayAdd({ onAddPerson }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleAgeChange(event) {
    setAge(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onAddPerson(name, age);
    setName("");
    setAge("");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleNameChange}
        placeholder="Name"
        value={name}
        required
      />
      <input
        type="number"
        onChange={handleAgeChange}
        placeholder="Age"
        value={age}
        required
      />
      <button>Add</button>
    </form>
  );
}

export default BirthdayAdd;
