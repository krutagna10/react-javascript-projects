import BirthdayList from "./components/BirthdayList/BirthdayList";
import data from "./data";
import { useState } from "react";
import BirthdayAdd from "./components/BirthdayAdd/BirthdayAdd";

function BirthdayRemainder() {
  const [persons, setPersons] = useState(data);

  const handleClick = () => {
    setPersons([]);
  };

  return (
    <div>
      <h1 className="text--center">Birthday Remainder</h1>
      <BirthdayAdd />
      <BirthdayList persons={persons} />
      <button className="width-100 margin-200" onClick={handleClick}>
        Clear All
      </button>
    </div>
  );
}

export default BirthdayRemainder;
