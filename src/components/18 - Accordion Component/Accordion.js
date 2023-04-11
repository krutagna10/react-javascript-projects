import data from "./data";
import { useState } from "react";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleClick = (index) => {
    setActiveIndex((prevIndex) => {
      return prevIndex === index ? -1 : index;
    });
  };

  const style = {
    width: "36rem",
    height: "42rem",
    textAlign: "left",
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Accordion Component</h1>
      <table style={style}>
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
