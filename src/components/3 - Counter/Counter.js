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
    <div>
      <h1 style={{ textAlign: "center" }}>Counter</h1>
      <table>
        <thead>
          <tr>
            <td>Counter Value</td>
            <td>Increment Button</td>
            <td>Decrement Button</td>
            <td>Reset Buttton</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{counter}</td>
            <td>
              <button onClick={handleIncrement}>Increment</button>
            </td>
            <td>
              <button onClick={handleDecrement}>Decrement</button>
            </td>
            <td>
              <button onClick={handleReset}>Reset</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Counter;
