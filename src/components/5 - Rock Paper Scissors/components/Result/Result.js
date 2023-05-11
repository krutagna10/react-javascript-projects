import { useContext } from "react";
import GameContext from "../../context/GameContext";

function Result({ onPlayAgain }) {
  const { choices, result } = useContext(GameContext);

  console.log(choices);

  return (
    <div className="m-8">
      <h2>Game Result</h2>
      <table>
        <thead>
          <tr>
            <th>User Choice</th>
            <th>Computer Choice</th>
            <th>Result</th>
            <th>Play Again Button</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{choices.user}</td>
            <td>{choices.computer}</td>
            <td>{result}</td>
            <td>
              <button onClick={onPlayAgain}>Play Again</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Result;
