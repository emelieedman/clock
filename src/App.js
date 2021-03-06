import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styles from "./App.module.css";
import StopwatchTest from "./Components/Pages/Stopwatch/StopwatchTest";
import TimerTest from "./Components/Pages/Timer/TimerTest";
import Clock from "./Components/Pages/Clock/Clock";
import Menu from "./Components/Menu/Menu";
import Alarm from "./Components/Pages/Alarm/Alarm";

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [over, setOver] = useState(false);

  const minTwoDigits = (n) => {
    return (n < 10 ? "0" : "") + n;
  };

  const toggle = () => {
    setIsRunning(!isRunning);
    console.log("is running?", !isRunning);
  };

  return (
    <div className={styles.App}>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            component={() => <Clock minTwoDigits={minTwoDigits} />}
          />
          <Route
            exact
            path="/clock"
            component={() => <Clock minTwoDigits={minTwoDigits} />}
          />
          <Route
            exact
            path="/alarm"
            component={() => <Alarm over={over} setOver={setOver} />}
          />
          <Route
            exact
            path="/timer"
            component={() => (
              <TimerTest
                isRunning={isRunning}
                setIsRunning={setIsRunning}
                toggle={toggle}
                minTwoDigits={minTwoDigits}
                over={over}
                setOver={setOver}
              />
            )}
          />
          <Route
            exact
            path="/stopwatch"
            component={() => <StopwatchTest minTwoDigits={minTwoDigits} />}
          />
        </Switch>

        <Menu />
      </Router>
    </div>
  );
}

export default App;
