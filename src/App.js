import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styles from "./App.module.css";
import Button from "./Components/Button/Button";
import Stopwatch from "./Components/Pages/Stopwatch/Stopwatch";
import Timer from "./Components/Pages/Timer/Timer";
import background from "./Assets/clock-background.svg";
import { navButtonData } from "./navButtonData";

window.navButtonData = navButtonData;

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

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

  return (
    <div className={styles.App}>
      <Router>
        <Switch>
          <Route
            exact
            path="/stopwatch"
            component={() => (
              <Stopwatch
                isRunning={isRunning}
                reset={reset}
                toggle={toggle}
                seconds={seconds}
                setSeconds={setSeconds}
                minutes={minutes}
                setMinutes={setMinutes}
                minTwoDigits={minTwoDigits}
                hours={hours}
                setHours={setHours}
              />
            )}
          />
          <Route
            exact
            path="/timer"
            component={() => (
              <Timer
                isRunning={isRunning}
                setIsRunning={setIsRunning}
                reset={reset}
                toggle={toggle}
                seconds={seconds}
                setSeconds={setSeconds}
                minutes={minutes}
                setMinutes={setMinutes}
                minTwoDigits={minTwoDigits}
                hours={hours}
                setHours={setHours}
              />
            )}
          />
        </Switch>

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

        <div className={styles.navigationButtons}>
          {navButtonData.map((item) => (
            <Button
              key={item.id}
              id={item.id}
              className={styles.button}
              img={item.img}
            />
          ))}
        </div>
      </Router>
    </div>
  );
}

export default App;
