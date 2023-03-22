import classes from "./Game.module.css";
import { useContext, useState } from "react";
import { ComputerContext, UserContext } from "../../context/Context";
import winConditions from "./winConditions";
import Board from "../Board/Board";

const Game = () => {
  const user = useContext(UserContext);
  const computer = useContext(ComputerContext);

  const [userArray, setUserArray] = useState([]);
  const [computerArray, setComputerArray] = useState([]);
  const [choices, setChoices] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);

  const handleUserChoice = (index) => {
    setUserArray((prevUserArray) => [...prevUserArray, index]);
  };

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
