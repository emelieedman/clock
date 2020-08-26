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
  over,
  setOver,
  time,
  setTime,
  h,
  min,
  sec,
}) => {
  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else if (seconds === 0 && minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else if (seconds === 0 && minutes === 0 && hours > 0) {
          setHours(hours - 1);
          setMinutes(59);
          setSeconds(59);
        }
      }, 1000);
    } else if (!isRunning && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, seconds, setSeconds, hours, setHours, minutes, setMinutes]);

  return (
    <>
      <div className={styles.inputFields}>
        <InputField
          timeType="hours"
          onChange={(event) => setHours(event.target.value)}
          value={minTwoDigits(hours)}
        />
        <InputField
          timeType="minutes"
          onChange={(event) => setMinutes(event.target.value)}
          value={minTwoDigits(minutes)}
        />
        <InputField
          timeType="seconds"
          onChange={(event) => setSeconds(event.target.value)}
          value={minTwoDigits(seconds)}
        />
      </div>

      <div className={styles.startResetButtons}>
        <Button text="Reset" onClick={reset} />
        <Button text={isRunning ? "Pause" : "Start"} onClick={toggle} />
      </div>
    </>
  );
};

export default Timer;
