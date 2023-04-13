import BirthdayList from "./components/BirthdayList/BirthdayList";
import data from "./data";
import { useState } from "react";
import BirthdayAdd from "./components/BirthdayAdd/BirthdayAdd";

function BirthdayRemainder() {
  const [persons, setPersons] = useState(data);

  function handleAddPerson(name, age) {
    const newPerson = {
      id: crypto.randomUUID(),
      name: name,
      age: age,
    };
    setPersons((prevPersons) => [...prevPersons, newPerson]);
  }

  function handleRemovePerson(removeId) {
    console.log(removeId);
    setPersons((prevPersons) => {
      const nextPersons = prevPersons.filter((person) => {
        return removeId !== person.id;
      });
      return nextPersons;
    });
  }

  const handleClick = () => {
    setPersons([]);
  };

  return (
    <div>
      <h1 className="text--center">Birthday Remainder</h1>
      <BirthdayAdd />
      <BirthdayList
        persons={persons}
        onAddPerson={handleAddPerson}
        onRemovePerson={handleRemovePerson}
      />
      <button className="width-100 margin-200" onClick={handleClick}>
        Clear All
      </button>
    </div>
  );
}

export default BirthdayRemainder;
