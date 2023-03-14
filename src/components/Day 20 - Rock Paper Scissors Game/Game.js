import Choice from "./Choice";
import Result from "./Result";
import { useState } from "react";

const Game = () => {
  const [isChoiceSelected, setIsChoiceSelected] = useState(false);

  const [choices, setChoices] = useState({
    user: "",
    computer: "",
  });

  const handleChoice = (userChoice, computerChoice) => {
    setChoices((prevChoices) => {
      const nextChoices = {
        ...prevChoices,
        user: userChoice,
        computer: computerChoice,
      };
      return nextChoices;
    });

    setIsChoiceSelected(true);
  };

  return (
    <div className="game">
      <h1>Rock Paper Scissors</h1>
      {isChoiceSelected ? (
        <Result userChoice={choices.user} computerChoice={choices.computer} />
      ) : (
        <Choice onChoice={handleChoice} />
      )}
    </div>
  );
};

export default Game;
