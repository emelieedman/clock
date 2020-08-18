import React, { useEffect, useState } from "react";
import styles from "./Stopwatch.module.css";
import DigitalBox from "../../DigitalBox/DigitalBox";
import Button from "../../Button/Button";
import arrow from "../../../Assets/stopwatchArrow.svg";

const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  function toggle() {
    setIsRunning(!isRunning);
    console.log("is running?", !isRunning);
  }

  function reset() {
    setSeconds(0);
    setIsRunning(false);
  }

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
  }, [isRunning, seconds]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.digitalBoxes}>
        <DigitalBox nr={minutes > 60 ? setHours(hours + 1) : hours} />
        <DigitalBox nr={seconds > 60 ? setMinutes(minutes + 1) : minutes} />
        <DigitalBox nr={seconds <= 60 ? seconds : setSeconds(0)} />
      </div>
      <div className={styles.dot}></div>
      <div className={isRunning ? styles.animated : styles.notAnimated}></div>
      <div className={styles.startResetButtons}>
        <Button text="Reset" onClick={reset} />
        <Button text={isRunning ? "Stop" : "Start"} onClick={toggle} />
      </div>
    </div>
  );
};

export default Stopwatch;
