import React from "react";
import classes from "./Board.module.css";
import { useContext } from "react";
import { ComputerContext, UserContext } from "../../context/Context";
import x from "../../assets/x.png";
import o from "../../assets/o.png";

const icons = {
  x: `url(${x})`,
  o: `url(${o})`,
};

const Board = ({ onUserChoice, userArray, computerArray }) => {
  const { choice: userChoice } = useContext(UserContext);
  const { choice: computerChoice } = useContext(ComputerContext);

  const isIndexPresent = (index) => {
    const set = new Set([...userArray, ...computerArray]);
    return set.has(index);
  };

  return (
    <div className={classes.game__buttons}>
      {new Array(9).fill(0).map((_, index) => (
        <React.Fragment key={index}>
          {isIndexPresent(index) ? (
            <button
              className={classes.game__btn}
              style={{
                backgroundImage: userArray.includes(index)
                  ? icons[userChoice]
                  : icons[computerChoice],
              }}
            />
          ) : (
            <button
              className={classes.game__btn}
              onClick={() => {
                onUserChoice(index);
              }}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Board;
