import questions from "./data";
import { useState } from "react";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isScoreVisible, setIsScoreVisible] = useState(false);
  const [score, setScore] = useState(0);

  const handleIncrementQuestion = (isCorrect) => {
    // Incrementing score
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    // Changing questions
    setCurrentQuestion((prevCurrentQuestion) => {
      return prevCurrentQuestion === questions.length - 1
        ? setIsScoreVisible(true)
        : prevCurrentQuestion + 1;
    });
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Quiz App</h1>
      <h2 style={{ textAlign: "center" }}>
        {isScoreVisible ? "Result" : "Quiz Questions"}
      </h2>
      {isScoreVisible ? (
        <table>
          <thead>
            <tr>
              <th>Correct Questions</th>
              <th>Incorrect Questions</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{score}</td>
              <td>{questions.length - score}</td>
              <td>{score}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <table style={{ maxWidth: "64rem" }}>
          <thead>
            <tr>
              <th>Question Number</th>
              <th>Question</th>
              <th>Option 1</th>
              <th>Option 2</th>
              <th>Option 3</th>
              <th>Option 4</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{currentQuestion + 1}</td>
              <td>{questions[currentQuestion].questionText}</td>
              {questions[currentQuestion].answerOptions.map(
                (element, index) => (
                  <td key={index}>
                    <button
                      onClick={() => {
                        handleIncrementQuestion(element.isCorrect);
                      }}
                    >
                      {element.answerText}
                    </button>
                  </td>
                )
              )}
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Quiz;
