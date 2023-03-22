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
  const user = useContext(UserContext);
  const computer = useContext(ComputerContext);

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
                backgroundImage: icons.x,
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
