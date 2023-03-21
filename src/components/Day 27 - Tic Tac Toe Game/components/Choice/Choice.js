import { useState } from "react";

const Choice = ({ onChoice }) => {
  const [choices, setChoices] = useState({ user: "x", computer: "o" });

  const handleRadioChange = (event) => {
    const userChoice = event.target.dataset.choice;

    event.userChoice === "x"
      ? setChoices({ user: userChoice, computer: "o" })
      : setChoices({ user: userChoice, computer: "x" });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onChoice({ ...choices });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Pick your choice</h2>
      <table>
        <thead>
          <tr>
            <th>X Radio</th>
            <th>O Radio</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <label>
                X :{" "}
                <input
                  type="radio"
                  onChange={handleRadioChange}
                  name="input__radio"
                  data-choice="x"
                  defaultChecked
                />
              </label>
            </td>
            <td>
              <label>
                O :{" "}
                <input
                  type="radio"
                  onChange={handleRadioChange}
                  name="input__radio"
                  data-choice="o"
                />
              </label>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <button>Start Game</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};

export default Choice;
