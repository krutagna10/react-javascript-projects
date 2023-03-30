import Choice from "./components/Choice/Choice";
import Result from "./components/Result/Result";
import { useState } from "react";

const winConditions = {
  paper: "rock",
  rock: "scissors",
  scissors: "paper",
};

const Game = () => {
  const [isChoiceSelected, setIsChoiceSelected] = useState(false);
  const [result, setResult] = useState("");

  const [choices, setChoices] = useState({
    user: "",
    computer: "",
  });

  const handleResult = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return "draw";
    } else if (winConditions[userChoice] === computerChoice) {
      return "win";
    } else {
      return "lose";
    }
  };

  const handleChoice = (userChoice, computerChoice) => {
    setChoices({ user: userChoice, computer: computerChoice });

    const result = handleResult(userChoice, computerChoice);
    setResult(result);

    setIsChoiceSelected(true);
  };

  const handlePlayAgain = () => {
    setIsChoiceSelected(false);
    setChoices({ user: "", computer: "" });
  };

  return (
    <div className="game">
      <h1>Rock Paper Scissors</h1>
      {isChoiceSelected ? (
        <Result
          userChoice={choices.user}
          computerChoice={choices.computer}
          result={result}
          onPlayAgain={handlePlayAgain}
        />
      ) : (
        <Choice onChoice={handleChoice} />
      )}
    </div>
  );
};

export default Game;
