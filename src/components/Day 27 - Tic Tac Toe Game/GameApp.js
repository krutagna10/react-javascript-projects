import Choice from "./components/Choice/Choice";
import Game from "./components/Game/Game";
import { UserContext } from "./context/Context";
import { ComputerContext } from "./context/Context";
import { useState } from "react";

const GameApp = () => {
  const [userChoice, setUserChoice] = useState("x");
  const [computerChoice, setComputerChoice] = useState("o");

  const handleChoice = ({ user: userChoice, computer: computerChoice }) => {
    setUserChoice(userChoice);
    setComputerChoice(computerChoice);
  };

  return (
    <div className="game">
      <UserContext.Provider value={{ name: "user", choice: userChoice }}>
        <ComputerContext.Provider
          value={{ name: "computer", choice: computerChoice }}
        >
          <h1>Tic Tac Toe Game</h1>
          <Choice onChoice={handleChoice} />
          <Game />
        </ComputerContext.Provider>
      </UserContext.Provider>
    </div>
  );
};

export default GameApp;
