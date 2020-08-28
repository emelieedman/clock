import React, { useState } from "react";
import styles from "./Menu.module.css";
import LinkComponent from "../LinkComponent/LinkComponent";

const Menu = ({ reset }) => {
  const [open, setOpen] = useState(false);
  const [isClockOpen, setIsClockOpen] = useState(false);
  const [isAlarmOpen, setIsAlarmOpen] = useState(false);
  const [isTimerOpen, setIsTimerOpen] = useState(false);
  const [isStopwatchOpen, setIsStopwatchOpen] = useState(false);

  const toggleClass = () => {
    setOpen(!open);
  };
  const toggleClock = () => {
    setIsClockOpen(!isClockOpen);
  };
  const toggleAlarm = () => {
    setIsAlarmOpen(!isAlarmOpen);
  };
  const toggleTimer = () => {
    setIsTimerOpen(!isTimerOpen);
  };
  const toggleStopwatch = () => {
    setIsStopwatchOpen(!isStopwatchOpen);
  };

  const navItems2 = [
    {
      id: "clock",
      onclick: toggleClock,
      classname: "clock",
      background: "#E3F6F6",
    },
    {
      id: "alarm",
      onclick: toggleAlarm,
      classname: "alarm",
      background: "#FFFAFA",
    },
    {
      id: "timer",
      onclick: toggleTimer,
      classname: "timer",
      background: "#E3E3F6",
    },
    {
      id: "stopwatch",
      onclick: toggleStopwatch,
      classname: "stopwatch",
      background: "#E9F6E3",
      left: "40vw",
    },
  ];

  // const navItems = ["Clock", "Alarm", "Timer", "Stopwatch"];
  return (
    <>
      <div className={open ? styles.menuOpen : styles.menuClosed}>
        {navItems2.map((item) => (
          <LinkComponent
            key={item.id}
            classname={item.classname}
            background={item.background}
            text={item.id}
            id={item.id}
            onclick={item.onclick}
            toggleClass={toggleClass}
            reset={reset}
          ></LinkComponent>
        ))}
      </div>
    </>
  );
};

export default Menu;
