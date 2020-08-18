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
import Stopwatch from "./Components/Pages/Stopwatch/Stopwatch";

function App() {
  return (
    <div className="App">
      <Stopwatch />

      <div className="ellipse"></div>

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
