import React, { useEffect, useState } from "react";

const QuoteGenerator = () => {
  const [quotes, setQuotes] = useState([]);
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((data) => {
        setQuotes(data);
        setIsLoading(false);
      });
  }, []);

  const handleClick = () => {
    const random = Math.floor(Math.random() * quotes.length);
    setIndex(random);
  };

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1>Quote Generator</h1>
      <table style={{ maxWidth: "42rem" }}>
        <thead>
          <tr>
            <th>Author</th>
            <th>Quote</th>
            <th>Generate Quote Button</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{quotes[index].author}</td>
            <td>{quotes[index].text}</td>
            <td>
              <button onClick={handleClick}>New Quote</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default QuoteGenerator;
