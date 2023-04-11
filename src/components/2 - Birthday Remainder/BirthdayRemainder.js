import data from "./data";
import { useState } from "react";

const List = ({ persons }) => {
  return (
    <table>
      <thead>
        <tr>
          <td>Id</td>
          <td>Name</td>
          <td>Age</td>
        </tr>
      </thead>
      <tbody>
        {persons.map((person) => (
          <tr key={person.id}>
            <td>{person.id}</td>
            <td>{person.name}</td>
            <td>{person.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

function BirthdayRemainder() {
  const [persons, setPersons] = useState(data);

  const handleClick = () => {
    setPersons([]);
  };

  return (
    <main>
      <section className="container">
        <h2 style={{ textAlign: "center" }}>
          {persons.length} Birthdays Today
        </h2>
        {persons.length > 0 && <List persons={persons} />}
        <button
          style={{ marginTop: "1.5rem", width: "100%" }}
          onClick={handleClick}
        >
          Clear All
        </button>
      </section>
    </main>
  );
}

export default BirthdayRemainder;
