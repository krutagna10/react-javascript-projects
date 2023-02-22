import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const handleDecrement = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  const handleReset = () => {
    setCounter(0);
  };

  return (
    <div
      style={{
        textAlign: "center",
        border: "1px solid black",
        padding: "1.75rem",
      }}
      className="counter"
    >
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <div>
        <button
          onClick={handleIncrement}
          style={{ backgroundColor: "lightgreen", color: "white" }}
        >
          Increment
        </button>
        <button
          onClick={handleDecrement}
          style={{ backgroundColor: "coral", color: "white" }}
        >
          Decrement
        </button>
      </div>
      <button onClick={handleReset} style={{ backgroundColor: "yellow" }}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
