import React, { useEffect, useState } from "react";
import "./App.css";
import DigitalBox from "./Components/DigitalBox/DigitalBox";
import Button from "./Components/Button/Button";
import alarmImg from "./Assets/alarm.svg";
import alarmImgActive from "./Assets/alarm-active.svg";
import clockImg from "./Assets/clock.svg";
import clockImgActive from "./Assets/clock-active.svg";
import stopwatchImg from "./Assets/stopwatch.svg";
import stopwatchImgActive from "./Assets/stopwatch-active.svg";
import timerImg from "./Assets/timer.svg";
import timerImgActive from "./Assets/timer-active.svg";
import { useTimer, elapsedTime } from "./customHooks";

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  function toggle() {
    setIsRunning(!isRunning);
    console.log("is running?", !isRunning);
  }

  function reset() {
    setElapsedTime(0);
    setIsRunning(false);
  }

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
      }, 1000);
    } else if (!isRunning && elapsedTime !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, elapsedTime]);

  return (
    <div className="App">
      <div className="digital-boxes">
        <DigitalBox nr="00" />
        <DigitalBox nr="00" />
        <DigitalBox nr={elapsedTime} />
      </div>

      <div className="ellipse"></div>
      <div className="start-reset-buttons">
        <Button text="Reset" />
        <Button text={isRunning ? "Stop" : "Start"} onClick={toggle} />
      </div>
      <div className="navigation-buttons">
        <Button img={clockImg} />
        <Button img={alarmImg} />
        <Button img={timerImg} />
        <Button img={stopwatchImg} />
      </div>
    </div>
  );
}

export default App;
