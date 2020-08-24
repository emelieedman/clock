import React, { useEffect } from "react";
import styles from "./Timer.module.css";
import Button from "../../Button/Button";
import InputField from "../../InputField/InputField";

const Timer = ({
  reset,
  toggle,
  isRunning,
  setIsRunning,
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
        setSeconds(seconds - 1);
      }, 1000);
    } else if (!isRunning && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, seconds, setSeconds]);

  return (
    <>
      <div className={styles.inputFields}>
        <InputField
          timeType="hour"
          // nr={hours !== 0 && minutes <= 0 && seconds <= 0 ? hours - 1 : hours}
          onChange={(event) => setHours(event.target.value)}
          value={hours}
        />
        <InputField
          timeType="minutes"
          nr={
            seconds < 0 && minutes > 0
              ? setMinutes(minutes - 1)
              : minutes < 0 && hours > 0
              ? setMinutes(59)
              : minutes
          }
          onChange={(event) => setMinutes(event.target.value)}
          value={minutes}
        />
        <InputField
          timeType="seconds"
          nr={
            seconds > 0
              ? seconds - 1
              : seconds <= 0 && minutes <= 0 && hours <= 0
              ? setIsRunning(false)
              : seconds < 0 && minutes > 0
              ? setSeconds(59)
              : seconds < 0 && hours > 0
              ? setSeconds(0)
              : seconds
          }
          onChange={(event) => setSeconds(event.target.value)}
          value={seconds}
        />
      </div>

      <div className={styles.startResetButtons}>
        <Button text="Reset" onClick={reset} />
        <Button text={isRunning ? "Stop" : "Start"} onClick={toggle} />
      </div>
    </>
  );
};

export default Timer;
