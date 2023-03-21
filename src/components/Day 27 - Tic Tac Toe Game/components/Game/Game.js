import classes from "./Game.module.css";

const Game = () => {
  return (
    <div>
      <h2>Game</h2>
      <div className={classes.game__buttons}>
        {new Array(9).fill(0).map((element, index) => (
          <button className={classes.game__btn}></button>
        ))}
      </div>
    </div>
  );
};

export default Game;
