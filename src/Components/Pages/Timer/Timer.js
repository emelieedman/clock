import React, { useEffect, useState } from "react";
import styles from "./Timer.module.css";
import Button from "../../Button/Button";
import InputField from "../../InputField/InputField";
import AlarmPopUp from "../../AlarmPopUp/AlarmPopUp";
// import alarm from "../../../Assets/Music_Box-Big_Daddy-1389738694.mp3";

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
  toggleSelectButton,
}) => {
  const [hourInput, setHourInput] = useState();
  const [minuteInput, setMinuteInput] = useState();
  const [secondInput, setSecondInput] = useState();

  console.log("over", over);
  console.log("seconds", seconds);
  console.log("minutes", minutes);
  console.log("hours", hours);
  console.log("secondInput", secondInput);
  console.log("minuteInput", minuteInput);
  console.log("hourInput", hourInput);

  const handleStart = () => {
    setSeconds(secondInput);
    setMinutes(minuteInput);
    setHours(hourInput);
  };

  const handlePause = () => {
    setSecondInput(seconds);
    setMinuteInput(minutes);
    setHourInput(hours);
    setIsRunning(false);
  };

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(() => seconds - 1);
        } else if (seconds === 0 && minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else if (seconds === 0 && minutes === 0 && hours > 0) {
          setHours(hours - 1);
          setMinutes(59);
          setSeconds(59);
        } else if (
          (isRunning === true && seconds === 0) ||
          (seconds === null && minutes === 0) ||
          (minutes === null && hours === 0) ||
          null
        ) {
          setOver(true);
          setIsRunning(false);
        }
      }, 1000);
    } else if (!isRunning && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [
    isRunning,
    setIsRunning,
    over,
    setOver,
    seconds,
    setSeconds,
    hours,
    setHours,
    minutes,
    setMinutes,
  ]);

  return (
    <>
      <div className={styles.inputFields}>
        <InputField
          name={hours}
          onchange={(event) => setHourInput(event.target.value)}
          value={hours}
        />
        <InputField
          name={minutes}
          onchange={(event) => setMinuteInput(event.target.value)}
          value={minutes}
        />
        <InputField
          name={seconds}
          onchange={(event) => {
            setSecondInput(event.target.value);
          }}
          value={seconds}
        />
      </div>
      <div className={styles.startResetButtons}>
        <Button
          text={"Start"}
          onClick={
            !isRunning && !over
              ? () => {
                  toggle();
                  handleStart();
                }
              : null
          }
        />
        <Button text={"pause"} onClick={() => handlePause()} />
        <Button text="Reset" onClick={() => reset()} />
      </div>

      {over ? (
        <div className={styles.popUp}>
          <AlarmPopUp
            setOver={setOver}
            over={over}
            style={{ background: "#E3E3F6" }}
          />
        </div>
      ) : null}
    </>
  );
};

export default Timer;
