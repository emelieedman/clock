import React, { useEffect, useState } from "react";
import styles from "./Stopwatch.module.css";
import DigitalBox from "../../DigitalBox/DigitalBox";
import Button from "../../Button/Button";

const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const deg = 6;

  const minTwoDigits = (n) => {
    return (n < 10 ? "0" : "") + n;
  };

  let second = seconds * deg;
  let minute = minutes * deg;
  let hour = hours * deg;

  function toggle() {
    setIsRunning(!isRunning);
    console.log("is running?", !isRunning);
  }

  function reset() {
    setSeconds(0);
    setMinutes(0);
    setHours(0);
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
        <DigitalBox
          nr={
            minutes >= 60
              ? setHours(hours + 1) && setMinutes(0)
              : minTwoDigits(hours)
          }
        />
        <DigitalBox
          nr={
            seconds >= 60
              ? setMinutes(minutes + 1)
              : minutes > 60
              ? setMinutes(0)
              : minTwoDigits(minutes)
          }
        />
        <DigitalBox nr={seconds < 60 ? minTwoDigits(seconds) : setSeconds(0)} />
      </div>

      <div className={styles.clock}>
        <div className={styles.clockNav} />
        <div
          className={styles.secondHand}
          style={{
            transform: `rotate(${second}deg) `,
          }}
        />
        <div
          className={styles.minuteHand}
          style={{
            transform: `rotate(${minute}deg) `,
          }}
        />
        <div
          className={styles.hourHand}
          style={{
            transform: `rotate(${hour}deg) `,
          }}
        />
      </div>

      <div className={styles.startResetButtons}>
        <Button text="Reset" onClick={reset} />
        <Button text={isRunning ? "Stop" : "Start"} onClick={toggle} />
      </div>
    </div>
  );
};

export default Stopwatch;
