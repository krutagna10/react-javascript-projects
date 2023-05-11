import GameContext from "../../context/GameContext";
import { useContext } from "react";

function Score() {
  const { scores } = useContext(GameContext);

  return (
    <div className="m-8">
      <h2>Score</h2>
      <table>
        <thead>
          <tr>
            <th>User Score</th>
            <th>Draw Score</th>
            <th>Computer Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{scores.user}</td>
            <td>{scores.draw}</td>
            <td>{scores.computer}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Score;
