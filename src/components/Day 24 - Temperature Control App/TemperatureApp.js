import { useEffect, useReducer, useState } from "react";

const colors = {
  veryLow: "#1864ab",
  low: "#4dabf7",
  average: "#ffc9c9",
  high: "#ff6b6b",
  veryHigh: "#c92a2a",
};

function reducer(state, action) {
  switch (action.type) {
    case "increment-temperature": {
      return { ...state, temperature: state.temperature + 1 };
    }

    case "decrement-temperature": {
      return { ...state, temperature: state.temperature - 1 };
    }

    default: {
      throw new Error("Invalid action: " + action.type);
    }
  }
}

const TemperatureApp = () => {
  const [state, dispatch] = useReducer(reducer, { temperature: 10 });
  const [color, setColor] = useState("lightblue");

  useEffect(() => {
    if (state.temperature <= -5) {
      setColor(colors.veryLow);
    } else if (state.temperature <= 10) {
      setColor(colors.low);
    } else if (state.temperature <= 20) {
      setColor(colors.average);
    } else if (state.temperature <= 35) {
      setColor(colors.high);
    } else {
      setColor(colors.veryHigh);
    }
  }, [state.temperature]);

  const handleIncrementTemperature = () => {
    dispatch({ type: "increment-temperature" });
  };

  const handleDecrementTemperature = () => {
    dispatch({ type: "decrement-temperature" });
  };

  return (
    <div>
      <h1>Temperature Control App</h1>
      <table>
        <thead>
          <tr>
            <th>Temperature</th>
            <th>Temperature Color</th>
            <th>Increment Button</th>
            <th>Decrement Button</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{state.temperature}°C</td>
            <td style={{ backgroundColor: color }}></td>
            <td>
              <button onClick={handleIncrementTemperature}>Increment</button>
            </td>
            <td>
              <button onClick={handleDecrementTemperature}>Decrement</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TemperatureApp;
