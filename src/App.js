import React, { useState } from "react";
import styles from "./App.module.css";
import Button from "./Components/Button/Button";
import alarmImg from "./Assets/alarm.svg";
import clockImg from "./Assets/clock.svg";
import stopwatchImg from "./Assets/stopwatch.svg";
import timerImg from "./Assets/timer.svg";
import Stopwatch from "./Components/Pages/Stopwatch/Stopwatch";
import background from "./Assets/clock-background.svg";
import Digits from "./Components/Digits/Digits";

function App() {
  const [isActive, setIsActive] = useState();
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  const images = [clockImg, alarmImg, timerImg, stopwatchImg];

  const deg = 6;
  const hourDeg = 30;

  let second = seconds * deg;
  let minute = minutes * deg;
  let hour = hours * hourDeg;

  const minTwoDigits = (n) => {
    return (n < 10 ? "0" : "") + n;
  };

  const toggle = () => {
    setIsRunning(!isRunning);
    console.log("is running?", !isRunning);
  };

  const reset = () => {
    setSeconds(0);
    setMinutes(0);
    setHours(0);
    setIsRunning(false);
  };

  const handleClick = (id) => {
    setIsActive({ id });
    console.log(isActive);
  };

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
      <div className={styles.digits}>
        <Digits
          nr={
            minutes >= 60
              ? setHours(hours + 1) && setMinutes(0)
              : minTwoDigits(hours)
          }
        />
        <Digits
          nr={
            seconds >= 60
              ? setMinutes(minutes + 1)
              : minutes > 60
              ? setMinutes(0)
              : minTwoDigits(minutes)
          }
        />
        <Digits nr={seconds < 60 ? minTwoDigits(seconds) : setSeconds(0)} />
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

      <Stopwatch
        isRunning={isRunning}
        reset={reset}
        toggle={toggle}
        seconds={seconds}
        setSeconds={setSeconds}
      />

      <div className={styles.navigationButtons}>
        {images.map((item) => (
          <Button id={item} img={item} onClick={() => handleClick(item)} />
        ))}
      </div>
    </div>
  );
}

export default App;
