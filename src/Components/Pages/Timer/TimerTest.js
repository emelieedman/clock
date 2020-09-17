import React, { useEffect, useState, useCallback } from "react";
import styles from "./Timer.module.css";
import Button from "../../Button/Button";
import InputField from "../../InputField/InputField";
import AlarmPopUp from "../../AlarmPopUp/AlarmPopUp";
import blackBackground from "../../../Assets/black-bump.svg";

const TimerTest = ({ over, setOver, minTwoDigits }) => {
  const [diff, setDiff] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const [hourInput, setHourInput] = useState(0);
  const [minInput, setMinInput] = useState(0);
  const [secInput, setSecInput] = useState(0);

  const [alarm, setAlarm] = useState(0);

  const resetInput = () => {
    setHourInput(0);
    setMinInput(0);
    setSecInput(0);
  };

  const reset = useCallback(() => {
    setIsRunning(false);
    resetInput();
  }, []);

  const toggle = () => {
    setIsRunning(!isRunning);

    const add = new Date();
    add.setHours(add.getHours() + parseInt(hourInput));
    add.setMinutes(add.getMinutes() + parseInt(minInput));
    add.setSeconds(add.getSeconds() + parseInt(secInput));
    setAlarm(add.getTime());
  };

  useEffect(() => {
    let interval;
    interval = setInterval(() => {
      if (isRunning) {
        let diff = alarm - new Date().getTime();
        setDiff(diff);

        if (diff < 0) {
          reset();
          clearInterval(interval);
          setOver(true);
          console.log("RIIIING");
        }
      }
    }, 10);
    return () => clearInterval(interval);
  }, [isRunning, alarm, reset, setOver]);

  const hour = new Date(diff).getHours() - 1;
  const min = new Date(diff).getMinutes();
  const sec = new Date(diff).getSeconds();

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
      <div className={styles.inputFields}>
        <InputField
          onchange={(event) => setHourInput(event.target.value)}
          value={minTwoDigits(isRunning ? hour : hourInput)}
        />
        <InputField
          onchange={(event) => setMinInput(event.target.value)}
          value={minTwoDigits(isRunning ? min : minInput)}
        />
        <InputField
          onchange={(event) => setSecInput(event.target.value)}
          value={minTwoDigits(isRunning ? sec : secInput)}
        />
      </div>
      <div className={styles.startResetButtons}>
        <Button text="Reset" onClick={() => reset()} />
        <Button
          text={isRunning ? "Pause" : "Start"}
          onClick={() => {
            toggle();
          }}
        />
      </div>
      {over ? (
        <AlarmPopUp
          over={over}
          setOver={setOver}
          style={{ background: "#DFD4F6" }}
        />
      ) : null}
    </>
  );
};

export default TimerTest;
