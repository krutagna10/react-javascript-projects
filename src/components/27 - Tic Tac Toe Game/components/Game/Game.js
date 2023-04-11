import classes from "./Game.module.css";
import { useContext, useEffect, useState } from "react";
import { ComputerContext, UserContext } from "../../context/Context";
import Board from "../Board/Board";

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let choices = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const Game = () => {
  const user = useContext(UserContext);
  const computer = useContext(ComputerContext);

  const [userArray, setUserArray] = useState([]);
  const [computerArray, setComputerArray] = useState([]);

  function checkForWin(arr) {
    for (const element of winConditions) {
      if (element.every((item) => arr.includes(item))) {
        console.log("Win");
        return true;
      }
    }
    return false;
  }

  function checkForDraw() {
    return choices.length === 0;
  }

  function handleComputerChoice() {
    const index = choices[Math.floor(Math.random() * choices.length)];

    const nextComputerArray = [...computerArray, index];

    setComputerArray(nextComputerArray);

    choices = choices.filter((choice) => choice !== index);

    checkForWin(nextComputerArray);
  }

  function handleUserChoice(index) {
    const nextUserArray = [...userArray, index];

    setUserArray(nextUserArray);

    choices = choices.filter((choice) => choice !== index);

    if (!checkForWin(nextUserArray) && !checkForDraw()) {
      handleComputerChoice();
    }
  }

  return (
    <div>
      <h2>Game</h2>
      <Board
        onUserChoice={handleUserChoice}
        userArray={userArray}
        computerArray={computerArray}
      />
    </div>
  );
};

export default Game;
