import React, { useEffect } from "react";
import styles from "./Stopwatch.module.css";
import Button from "../../Button/Button";
import Digits from "../../Digits/Digits";

const Stopwatch = ({
  reset,
  toggle,
  isRunning,
  seconds,
  setSeconds,
  minutes,
  setMinutes,
  hours,
  setHours,
  minTwoDigits,
}) => {
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
    <>
      <div>
        <Digits
          nr={
            minutes >= 60
              ? setHours(hours + 1) && setMinutes(0)
              : minTwoDigits(hours)
          }
        />
        <Digits
          nr={
            seconds >= 60
              ? setMinutes(minutes + 1)
              : minutes > 60
              ? setMinutes(0)
              : minTwoDigits(minutes)
          }
        />
        <Digits nr={seconds < 60 ? minTwoDigits(seconds) : setSeconds(0)} />
      </div>

      <div className={styles.startResetButtons}>
        <Button text="Reset" onClick={() => reset()} />
        <Button text={isRunning ? "Pause" : "Start"} onClick={() => toggle()} />
      </div>
    </>
  );
};

export default Stopwatch;
