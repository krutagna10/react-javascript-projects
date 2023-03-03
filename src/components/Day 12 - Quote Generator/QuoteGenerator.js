import React, { useEffect, useState } from "react";
import classes from "./QuoteGenerator.module.css";

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

  return (
    <div>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <div className={classes["quote-generator"]}>
          <button onClick={handleClick}>New Quote</button>
          <h1>"{quotes[index].text}"</h1>
          <p className={classes["quote-author"]}>- {quotes[index].author}</p>
        </div>
      )}
    </div>
  );
};

export default QuoteGenerator;
