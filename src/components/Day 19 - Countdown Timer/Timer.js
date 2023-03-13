import { useState, useRef, useReducer } from "react";

function reducer(time, action) {
  switch (action.type) {
    case "increment-seconds": {
      const nextTime = {
        ...time,
        seconds: time.seconds + 1,
      };
      return nextTime;
    }

    case "increment-minutes": {
      const nextTime = {
        ...time,
        seconds: 0,
        minutes: time.minutes + 1,
      };
      return nextTime;
    }

    case "reset-timer": {
      const nextTime = {
        ...time,
        seconds: 0,
        minutes: 0,
      };
      return nextTime;
    }

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

const Timer = () => {
  const [time, dispatch] = useReducer(reducer, { minutes: 0, seconds: 0 });

  const interval = useRef(null);

  const handleTimerStart = () => {
    interval.current = setInterval(() => {
      console.log(time.seconds);
      if (time.seconds === 10) {
        dispatch({ type: "increment-minutes" });
      } else {
        console.log("Seconds incremented");
        dispatch({ type: "increment-seconds" });
      }
    }, 1000);
  };

  const handleTimerStop = () => {
    clearInterval(interval.current);
  };

  const handleTimerReset = () => {
    clearInterval(interval.current);

    dispatch({ type: "reset-timer" });
  };

  return (
    <div className="timer">
      <h1 style={{ textAlign: "center" }} className="timer__heading">
        Timer App
      </h1>
      <table>
        <thead>
          <tr>
            <th>Time (min: sec)</th>
            <th>Start Button</th>
            <th>End Button</th>
            <th>Reset Button</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <h2>
                {time.minutes} : {time.seconds}
              </h2>
            </td>
            <td onClick={handleTimerStart}>
              <button>Start</button>
            </td>
            <td onClick={handleTimerStop}>
              <button>Stop</button>
            </td>
            <td onClick={handleTimerReset}>
              <button>Reset</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Timer;
