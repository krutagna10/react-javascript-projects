import GameProvider from "./context/GameProvider";
import Choice from "./components/Choice/Choice";
import Result from "./components/Result/Result";
import { useState } from "react";
import Score from "./components/Score/Score";

function RPSGame() {
  const [isChoiceSelected, setIsChoiceSelected] = useState(false);

  function handleStartGame() {
    setIsChoiceSelected(true);
  }

  function handlePlayAgain() {
    setIsChoiceSelected(false);
  }

  return (
    <div>
      <GameProvider>
        <h1>Rock Paper Scissors</h1>
        {isChoiceSelected ? (
          <>
            <Result onPlayAgain={handlePlayAgain} />
            <Score />
          </>
        ) : (
          <Choice onStartGame={handleStartGame} />
        )}
      </GameProvider>
    </div>
  );
}

export default RPSGame;
