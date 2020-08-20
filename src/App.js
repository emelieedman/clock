import React, { useState } from "react";
import "./App.css";
import Button from "./Components/Button/Button";
import alarmImg from "./Assets/alarm.svg";
import clockImg from "./Assets/clock.svg";
import stopwatchImg from "./Assets/stopwatch.svg";
import timerImg from "./Assets/timer.svg";
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
      <div className="navigation-buttons">
        {images.map((item) => (
          <Button id={item} img={item} onClick={() => handleClick(item)} />
        ))}
      </div>
    </div>
  );
}

export default App;
