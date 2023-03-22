import { useState, useEffect } from "react";
import classes from "./AdviceGenerator.module.css";

const url = "https://api.adviceslip.com/advice";

const AdviceGenerator = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAdvice();
  }, []);

  async function fetchAdvice() {
    setIsLoading(true);

    try {
      const response = await fetch(url, { cache: "no-cache" });
      if (!response.ok) {
        throw new Error("Data not found");
      }
      const data = await response.json();
      console.log(data);
      setData(data.slip);
    } catch (error) {
      alert(`${error.name}: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  }

  function handleClick() {
    fetchAdvice();
  }

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Advice Generator</h1>
      <div className={classes.advice__generator}>
        <p>ADVICE #{data.id}</p>
        <h2 className={classes.advice}>"{data.advice}"</h2>
        <button onClick={handleClick}>Generate Advice</button>
      </div>
    </div>
  );
};

export default AdviceGenerator;
