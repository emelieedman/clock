import React, { useState } from "react";
import styles from "./App.module.css";
import Button from "./Components/Button/Button";
import alarmImg from "./Assets/alarm.svg";
import clockImg from "./Assets/clock.svg";
import stopwatchImg from "./Assets/stopwatch.svg";
import timerImg from "./Assets/timer.svg";
import Stopwatch from "./Components/Pages/Stopwatch/Stopwatch";
import background from "./Assets/clock-background.svg";

function App() {
  const [isActive, setIsActive] = useState();

  const handleClick = (id) => {
    setIsActive({ id });
    console.log(isActive);
  };

  const images = [clockImg, alarmImg, timerImg, stopwatchImg];

  return (
    <div className={styles.App}>
      <img
        src={background}
        alt=""
        className={styles.backgroundImg}
        style={{
          zIndex: "0",
          display: "block",
          width: "115%",
          position: "absolute",
          top: "42%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
      <Stopwatch />
      <div className={styles.navigationButtons}>
        {images.map((item) => (
          <Button id={item} img={item} onClick={() => handleClick(item)} />
        ))}
      </div>
    </div>
  );
}

export default App;
