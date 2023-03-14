import React from "react";

const winConditions = {
  paper: "rock",
  rock: "scissors",
  scissors: "paper",
};

const Result = ({ userChoice, computerChoice }) => {
  return (
    <React.Fragment>
      <h2>Result:</h2>
      <table>
        <thead>
          <tr>
            <th>User Choice</th>
            <th>Computer Choice</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{userChoice.toUpperCase()}</td>
            <td>{computerChoice.toUpperCase()}</td>
            <td>You Win</td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Result;
