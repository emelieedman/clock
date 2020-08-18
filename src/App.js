import React, { useState } from "react";
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
  const [isActive, setIsActive] = useState();

  const handleClick = (id) => {
    setIsActive({ id });
    console.log(isActive);
  };

  const images = [clockImg, alarmImg, timerImg, stopwatchImg];

  return (
    <div className="App">
      <Stopwatch />

      <div className="ellipse"></div>

      <div className="navigation-buttons">
        {images.map((item) => (
          <Button id={item} img={item} onClick={() => handleClick(item)} />
        ))}
      </div>
    </div>
  );
}

export default App;
