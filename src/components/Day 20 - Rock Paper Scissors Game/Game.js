import Choice from "./Choice";
import Result from "./Result";
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
      setResult("draw");
    } else if (winConditions[userChoice] === computerChoice) {
      setResult("win");
    } else {
      setResult("lose");
    }
  };

  const handleChoice = (userChoice, computerChoice) => {
    setChoices((prevChoices) => {
      const nextChoices = {
        ...prevChoices,
        user: userChoice,
        computer: computerChoice,
      };
      return nextChoices;
    });

    handleResult(userChoice, computerChoice);

    setIsChoiceSelected(true);
  };

  return (
    <div className="game">
      <h1>Rock Paper Scissors</h1>
      {isChoiceSelected ? (
        <Result
          userChoice={choices.user}
          computerChoice={choices.computer}
          result={result}
        />
      ) : (
        <Choice onChoice={handleChoice} />
      )}
    </div>
  );
};

export default Game;
