import data from "./data";
import { useState } from "react";
import BirthdayAdd from "./components/BirthdayAdd/BirthdayAdd";
import Birthdays from "./components/Birthdays/Birthdays";

function BirthdayRemainder() {
  const [persons, setPersons] = useState(data);

  function handleAddPerson(name, age) {
    const newPerson = {
      id: crypto.randomUUID(),
      name: name,
      age: Number(age),
    };
    setPersons((prevPersons) => [...prevPersons, newPerson]);
  }

  function handleRemovePerson(removeId) {
    setPersons((prevPersons) => {
      const nextPersons = prevPersons.filter((person) => {
        return removeId !== person.id;
      });
      return nextPersons;
    });
  }

  const handleResetPersons = () => {
    setPersons([]);
  };

  return (
    <div>
      <h1>Birthday Remainder</h1>
      <BirthdayAdd onAddPerson={handleAddPerson} />
      <Birthdays
        persons={persons}
        onRemovePerson={handleRemovePerson}
        onResetPersons={handleResetPersons}
      />
    </div>
  );
}

export default BirthdayRemainder;
