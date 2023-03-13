import { useState, useRef } from "react";

const Timer = () => {
  const [time, setTime] = useState({
    minutes: 0,
    seconds: 0,
  });

  const interval = useRef(null);

  const handleTimerStart = () => {
    interval.current = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime.seconds === 59) {
          return {
            ...prevTime,
            seconds: 0,
            minutes: prevTime.minutes + 1,
          };
        }

        return {
          ...prevTime,
          seconds: prevTime.seconds + 1,
        };
      });
    }, 1000);
  };

  const handleTimerStop = () => {
    clearInterval(interval.current);
  };

  const handleTimerReset = () => {
    clearInterval(interval.current);

    setTime((prevTime) => {
      return { ...prevTime, seconds: 0, minutes: 0 };
    });
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
