import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styles from "./App.module.css";
import Button from "./Components/Button/Button";
import Stopwatch from "./Components/Pages/Stopwatch/Stopwatch";
import Timer from "./Components/Pages/Timer/Timer";
import background from "./Assets/clock-background.svg";
import blackBackground from "./Assets/black-bump.svg";
import { navButtonData } from "./navButtonData";
import Clock from "./Components/Pages/Clock/Clock";
import Menu from "./Components/Menu/Menu";

window.navButtonData = navButtonData;

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(undefined);
  const [minutes, setMinutes] = useState(undefined);
  const [hours, setHours] = useState(undefined);
  const [over, setOver] = useState(false);

  const deg = 6;
  const hourDeg = 30;

  let second = seconds * deg;
  let minute = minutes * deg;
  let hour = hours * hourDeg;

  const numbers = () => {
    for (let i = 0; i < 60; i++) {
      numbers.push(i);
    }
  };

  const minTwoDigits = (n) => {
    return (n < 10 ? "0" : "") + n;
  };

  const toggle = () => {
    setIsRunning(!isRunning);
    console.log("is running?", !isRunning);
  };

  const reset = () => {
    setHours(undefined);
    setMinutes(undefined);
    setSeconds(undefined);
    setIsRunning(false);
    setOver(false);
  };

  return (
    <div className={styles.App}>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <Clock
                seconds={seconds}
                setSeconds={setSeconds}
                minutes={minutes}
                setMinutes={setMinutes}
                hours={hours}
                setHours={setHours}
              />
            )}
          />
          <Route
            exact
            path="/clock"
            component={() => (
              <Clock
                seconds={seconds}
                setSeconds={setSeconds}
                minutes={minutes}
                setMinutes={setMinutes}
                hours={hours}
                setHours={setHours}
              />
            )}
          />
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
                numbers={numbers}
                over={over}
                setOver={setOver}
              />
            )}
          />
        </Switch>

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
        <Menu reset={reset} />
        {/* <div className={styles.navigationButtons}>
          {navButtonData.map((item) => (
            <Button
              key={item.id}
              id={item.id}
              className={styles.button}
              img={item.img}
              onClick={reset}
            />
          ))}
        </div> */}
      </Router>
    </div>
  );
}

export default App;
