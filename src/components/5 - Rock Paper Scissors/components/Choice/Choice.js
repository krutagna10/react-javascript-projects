import GameContext from "../../context/GameContext";
import { useState, useContext } from "react";

const options = ["rock", "paper", "scissors"];

function Choice({ onStartGame }) {
  const { onChoice } = useContext(GameContext);

  function handleUserChoice(event) {
    const userChoice = event.target.dataset.choice;
    const computerChoice = handleComputerChoice();

    onStartGame();
    onChoice(userChoice, computerChoice);
  }

  function handleComputerChoice() {
    const random = Math.floor(Math.random() * options.length);
    return options[random];
  }

  return (
    <>
      <h2>Pick your choice</h2>
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
            {options.map((option, index) => (
              <td key={index}>
                <button onClick={handleUserChoice} data-choice={option}>
                  {option.toUpperCase()}
                </button>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Choice;
