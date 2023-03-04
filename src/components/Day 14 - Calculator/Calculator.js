import { useState } from "react";
import classes from "./Calculator.module.css";

const Calculator = () => {
  const [outputText, setOutputText] = useState("0");

  const handleClick = (event) => {
    setOutputText(event.target.dataset.value);
  };

  return (
    <div className="calculator">
      <h1 style={{ textAlign: "center" }}>Calculator</h1>
      <div className={classes["calculator__output"]}>
        <p>{outputText}</p>
      </div>
      <div className={classes["calculator__buttons"]}>
        <button onClick={handleClick} data-value="7">
          7
        </button>
        <button onClick={handleClick} data-value="8">
          8
        </button>
        <button onClick={handleClick} data-value="9">
          9
        </button>
        <button onClick={handleClick} data-operator="DEL">
          DEL
        </button>
        <button onClick={handleClick} data-value="4">
          4
        </button>
        <button onClick={handleClick} data-value="5">
          5
        </button>
        <button onClick={handleClick} data-value="6">
          6
        </button>
        <button onClick={handleClick} data-operator="+">
          +
        </button>
        <button onClick={handleClick} data-value="1">
          1
        </button>
        <button onClick={handleClick} data-value="2">
          2
        </button>
        <button onClick={handleClick} data-value="3">
          3
        </button>
        <button onClick={handleClick} data-operator="-">
          -
        </button>
        <button onClick={handleClick} data-operator=".">
          .
        </button>
        <button onClick={handleClick} data-operator="0">
          0
        </button>
        <button onClick={handleClick} data-operator="/">
          /
        </button>
        <button onClick={handleClick} data-operator="*">
          x
        </button>
        <button
          className={classes["calculator__btn--reset"]}
          data-operator="Reset"
          onClick={handleClick}
        >
          Reset
        </button>
        <button
          className={classes["calculator__btn--equals"]}
          data-operator="Equals"
          onClick={handleClick}
        >
          Equals
        </button>
      </div>
    </div>
  );
};

export default Calculator;
