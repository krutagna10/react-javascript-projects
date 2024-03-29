import BirthdayList from "../BirthdayList/BirthdayList";
import { useState } from "react";

function Birthdays({ persons, onRemovePerson, onResetPersons }) {
  const [isSorted, setIsSorted] = useState(false);

  function handleIsSortedChange(event) {
    setIsSorted(event.target.checked);
  }

  let filteredPersons = [...persons];

  if (isSorted) {
    filteredPersons = [...filteredPersons].sort((personA, personB) => {
      return personA.age - personB.age;
    });
  }

  return (
    <div>
      <h2>Birthday List</h2>
      <div className="flex justify-center items-center gap-4">
        <label>
          Sort by Age <input type="checkbox" onChange={handleIsSortedChange} />
        </label>
        <button onClick={onResetPersons}>Clear All</button>
      </div>
      <BirthdayList persons={filteredPersons} onRemovePerson={onRemovePerson} />
      <h3 className="text--center">{persons.length} birthdays remaining</h3>
    </div>
  );
}

export default Birthdays;
