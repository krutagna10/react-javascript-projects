import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount((prevCounter) => prevCounter + 1);
  }

  function handleDecrement() {
    setCount((prevCounter) => prevCounter - 1);
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <div>
      <h1 className="text--center">Counter</h1>
      <table>
        <thead>
          <tr>
            <th>Counter Value</th>
            <th>Increment Button</th>
            <th>Decrement Button</th>
            <th>Reset Button</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{count}</td>
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
}

export default Counter;
