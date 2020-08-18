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

function App() {
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
        setSeconds((prevseconds) => prevseconds + 1);
      }, 1000);
    } else if (!isRunning && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, seconds]);

  return (
    <div className="App">
      <div className="digital-boxes">
        <DigitalBox nr={minutes > 60 ? setHours(hours + 1) : hours} />
        <DigitalBox nr={seconds > 60 ? setMinutes(minutes + 1) : minutes} />
        <DigitalBox nr={seconds <= 60 ? seconds : setSeconds(0)} />
      </div>

      <div className="ellipse"></div>
      <div className="start-reset-buttons">
        <Button text="Reset" onClick={reset} />
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
