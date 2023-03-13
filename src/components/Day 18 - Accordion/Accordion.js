import data from "./data";
import { useState } from "react";
import classes from "./Accordion.module.css";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleClick = (index) => {
    setActiveIndex((prevIndex) => {
      return prevIndex === index ? -1 : index;
    });
  };

  return (
    <div className="">
      <h1 className={classes.accordion__heading}>Accordion</h1>
      <table className={classes.accordion__table}>
        <thead>
          <tr>
            <th>Content</th>
            <th>Button</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>
                <h2>{item.title}</h2>
                {index === activeIndex && <p>{item.description}</p>}
              </td>
              <td>
                <button
                  onClick={() => {
                    handleClick(index);
                  }}
                >
                  {index === activeIndex ? "Hide" : "Show"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Accordion;
