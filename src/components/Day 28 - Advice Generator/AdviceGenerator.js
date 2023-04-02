import { useState, useEffect } from "react";

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
      <table>
        <thead>
          <tr>
            <th>Advice Number</th>
            <th>Advice</th>
            <th>Generate Advice Button</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.id}</td>
            <td>{data.advice}</td>
            <td>
              <button onClick={handleClick}>Generate Advice</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AdviceGenerator;
