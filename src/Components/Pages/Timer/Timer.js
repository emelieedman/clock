import React, { useEffect } from "react";
import styles from "./Timer.module.css";
import Button from "../../Button/Button";

const Timer = ({ reset, toggle, isRunning, seconds, setSeconds }) => {
  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(seconds + 1);
      }, 1000);
    } else if (!isRunning && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, seconds, setSeconds]);

  return (
    <div className={styles.startResetButtons}>
      <Button text="Reset" onClick={reset} />
      <Button text={isRunning ? "Stop" : "Start"} onClick={toggle} />
    </div>
  );
};

export default Timer;
