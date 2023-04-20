import GameContext from "./GameContext";
import { useState, useReducer } from "react";

const WIN_AGAINST = {
  rock: "scissors",
  scissors: "paper",
  paper: "rock",
};

const INITIAL_SCORES = { user: 0, draw: 0, computer: 0 };

function reducer(scores, action) {
  switch (action.type) {
    case "increment-user-score": {
      return { ...scores, user: scores.user + 1 };
    }
    case "increment-draw-score": {
      return { ...scores, draw: scores.draw + 1 };
    }
    case "increment-computer-score": {
      return { ...scores, computer: scores.computer + 1 };
    }
    default: {
      throw new Error("Invalid action: " + action.type);
    }
  }
}

function GameProvider({ children }) {
  const [choices, setChoices] = useState({
    user: "",
    computer: "",
  });

  const [result, setResult] = useState("");

  const [scores, dispatch] = useReducer(reducer, INITIAL_SCORES);

  function handleChoice(userChoice, computerChoice) {
    console.log(userChoice, computerChoice);
    setChoices({ user: userChoice, computer: computerChoice });
    handleResult(userChoice, computerChoice);
  }

  function handleResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      setResult("draw");
      dispatch({ type: "increment-draw-score" });
    } else if (WIN_AGAINST[userChoice] === computerChoice) {
      setResult("win");
      dispatch({ type: "increment-user-score" });
    } else {
      setResult("lose");
      dispatch({ type: "increment-computer-score" });
    }
  }

  const value = {
    choices: choices,
    onChoice: handleChoice,
    result: result,
    scores: scores,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export default GameProvider;
