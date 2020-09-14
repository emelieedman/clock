import React, { useEffect, useState } from "react";
import Digits from "../../Digits/Digits";
import styles from "./Stopwatch.module.css";
import Button from "../../Button/Button";
import blackBackground from "../../../Assets/black-bump.svg";

const StopwatchTest = ({ minTwoDigits }) => {
  const [prevSeconds, setPrevSeconds] = useState(0);
  const [prevMinutes, setPrevMinutes] = useState(0);
  const [prevHours, setPrevHours] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hour, setHour] = useState(0);

  const reset = () => {
    setIsRunning(false);
    setPrevSeconds(0);
    setPrevMinutes(0);
    setPrevHours(0);
    setSec(0);
    setMin(0);
    setHour(0);
  };

  const handleClick = () => {
    setIsRunning(!isRunning);
  };

  const setPrevTime = () => {
    setPrevHours(new Date().getHours());
    setPrevMinutes(new Date().getMinutes());
    setPrevSeconds(new Date().getSeconds());
  };

  useEffect(() => {
    let interval;

    interval = setInterval(() => {
      if (isRunning) {
        const add = new Date();
        add.setHours(new Date().getHours() - prevHours);
        add.setMinutes(new Date().getMinutes() - prevMinutes);
        add.setSeconds(new Date().getSeconds() - prevSeconds);

        setHour(add.getHours());
        setMin(add.getMinutes());
        setSec(add.getSeconds());
      }
    }, 10);
    return () => clearInterval(interval);
  }, [isRunning, prevHours, prevMinutes, prevSeconds, hour, min, sec]);

  return (
    <>
      <div className={styles.backgroundOverlay}></div>
      <div
        className={styles.wrapper}
        style={{
          transform: `rotate(${sec * 6}deg)`,
          transition: "1.1s linear",
        }}
      >
        <span className={styles.line}></span>
        <span className={styles.ball}></span>
      </div>

      <img
        src={blackBackground}
        alt=""
        className={styles.backgroundImg}
        style={{
          zIndex: "0",
          display: "block",
          width: "100vw",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
      <div className={styles.digits}>
        <Digits nr={minTwoDigits(hour)} />
        <Digits nr={minTwoDigits(min)} />
        <Digits nr={minTwoDigits(sec)} />
      </div>

      <div className={styles.startResetButtons}>
        <Button text="Reset" onClick={() => reset()} />
        <Button
          text={isRunning ? "Pause" : "Start"}
          onClick={() => {
            handleClick();
            setPrevTime();
          }}
        />
      </div>
    </>
  );
};

export default StopwatchTest;
