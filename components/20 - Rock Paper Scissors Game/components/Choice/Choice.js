import React from "react";

const Choice = ({ onChoice }) => {
  const getComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * options.length);
    return options[random];
  };

  const handleClick = (event) => {
    const userChoice = event.target.dataset.choice;
    const computerChoice = getComputerChoice();
    onChoice(userChoice, computerChoice);
  };

  return (
    <React.Fragment>
      <h2>Pick your Choice: </h2>
      <table>
        <thead>
          <tr>
            <th>Rock Button</th>
            <th>Paper Button</th>
            <th>Scissors Button</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <button onClick={handleClick} data-choice="rock">
                Rock
              </button>
            </td>
            <td>
              <button onClick={handleClick} data-choice="paper">
                Paper
              </button>
            </td>
            <td>
              <button onClick={handleClick} data-choice="scissors">
                Scissors
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Choice;
