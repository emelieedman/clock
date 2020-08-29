import React, { useState } from "react";
import styles from "./Menu.module.css";
import LinkComponent from "../LinkComponent/LinkComponent";
import { Link } from "react-router-dom";

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
    setIsAlarmOpen(false);
    setIsTimerOpen(false);
    setIsStopwatchOpen(false);
  };
  const toggleAlarm = () => {
    setIsAlarmOpen(!isAlarmOpen);
    setIsClockOpen(false);
    setIsTimerOpen(false);
    setIsStopwatchOpen(false);
  };
  const toggleTimer = () => {
    setIsTimerOpen(!isTimerOpen);
    setIsAlarmOpen(false);
    setIsClockOpen(false);
    setIsStopwatchOpen(false);
  };
  const toggleStopwatch = () => {
    setIsStopwatchOpen(!isStopwatchOpen);
    setIsAlarmOpen(false);
    setIsClockOpen(false);
    setIsTimerOpen(false);
  };

  const navItems2 = [
    {
      id: "clock",
      onclick: toggleClock,
      classname: "clock",
      styleOpen: {
        background: "#E3F6F6",
        margin: "0",
        color: "#d0d0d0",
        padding: "30px 8px 8px 32px",
        textDecoration: "none",
        fontSize: "18px",
        display: "block",
        transition: "0.3s",
        position: "fixed",
        width: "212px",
        height: "50px",
        left: "50vw",
        top: "25px",

        boxShadow: "10px 10px 8px rgba(26, 26, 26, 0.42)",
        borderRadius: "30px 0px 0px 30px",
      },
      styleClosed: {
        background: "#E3F6F6",
        margin: "0",
        color: "#d0d0d0",
        padding: "30px 8px 8px 32px",
        textDecoration: "none",
        fontSize: "18px",
        display: "block",
        transition: "0.3s",
        position: "fixed",
        width: "212px",
        height: "50px",
        left: "80vw",
        top: "25px",

        boxShadow: "10px 10px 8px rgba(26, 26, 26, 0.42)",
        borderRadius: "30px 0px 0px 30px",
      },
    },

    {
      id: "alarm",
      onclick: toggleAlarm,
      classname: "alarm",
      styleOpen: {
        background: "#FFFAFA",
        margin: "0",
        color: "#d0d0d0",
        padding: "30px 8px 8px 32px",
        textDecoration: "none",
        fontSize: "18px",
        display: "block",
        transition: "0.3s",
        position: "fixed",
        width: "212px",
        height: "50px",
        left: "50vw",
        top: "80px",

        boxShadow: "10px 10px 8px rgba(26, 26, 26, 0.42)",
        borderRadius: "30px 0px 0px 30px",
      },
      styleClosed: {
        background: "#FFFAFA",
        margin: "0",
        color: "#d0d0d0",
        padding: "30px 8px 8px 32px",
        textDecoration: "none",
        fontSize: "18px",
        display: "block",
        transition: "0.3s",
        position: "fixed",
        width: "212px",
        height: "50px",
        left: "80vw",
        top: "80px",

        boxShadow: "10px 10px 8px rgba(26, 26, 26, 0.42)",
        borderRadius: "30px 0px 0px 30px",
      },
    },

    {
      id: "timer",
      onclick: toggleTimer,
      classname: "timer",
      styleOpen: {
        background: "#E3E3F6",
        margin: "0",
        color: "#d0d0d0",
        padding: "30px 8px 8px 32px",
        textDecoration: "none",
        fontSize: "18px",
        display: "block",
        transition: "0.3s",
        position: "fixed",
        width: "212px",
        height: "50px",
        left: "50vw",
        top: "135px",

        boxShadow: "10px 10px 8px rgba(26, 26, 26, 0.42)",
        borderRadius: "30px 0px 0px 30px",
      },
      styleClosed: {
        background: "#E3E3F6",
        margin: "0",
        color: "#d0d0d0",
        padding: "30px 8px 8px 32px",
        textDecoration: "none",
        fontSize: "18px",
        display: "block",
        transition: "0.3s",
        position: "fixed",
        width: "212px",
        height: "50px",
        left: "80vw",
        top: "135px",

        boxShadow: "10px 10px 8px rgba(26, 26, 26, 0.42)",
        borderRadius: "30px 0px 0px 30px",
      },
    },
    {
      id: "stopwatch",
      onclick: toggleStopwatch,
      classname: "stopwatch",
      styleOpen: {
        background: "#E9F6E3",
        margin: "0",
        color: "#d0d0d0",
        padding: "30px 8px 8px 32px",
        textDecoration: "none",
        fontSize: "18px",
        display: "block",
        transition: "0.3s",
        position: "fixed",
        width: "212px",
        height: "50px",
        left: "50vw",
        top: "190px",

        boxShadow: "10px 10px 8px rgba(26, 26, 26, 0.42)",
        borderRadius: "30px 0px 0px 30px",
      },
      styleClosed: {
        background: "#E9F6E3",
        margin: "0",
        color: "#d0d0d0",
        padding: "30px 8px 8px 32px",
        textDecoration: "none",
        fontSize: "18px",
        display: "block",
        transition: "0.3s",
        position: "fixed",
        width: "212px",
        height: "50px",
        left: "80vw",
        top: "190px",

        boxShadow: "10px 10px 8px rgba(26, 26, 26, 0.42)",
        borderRadius: "30px 0px 0px 30px",
      },
    },
  ];

  console.log("isClockOpen?", isClockOpen);

  // const navItems = ["Clock", "Alarm", "Timer", "Stopwatch"];
  return (
    <>
      <div className={open ? styles.menuOpen : styles.menuClosed}>
        {/* {navItems2.map((item) => (
          <LinkComponent
            key={item.id}
            style={open ? item.styleOpen : item.styleClosed}
            text={item.id}
            id={item.id}
            onclick={item.onclick}
            toggleClass={toggleClass}
            reset={reset}
          ></LinkComponent>
        ))} */}
        <Link
          to={navItems2[0].id}
          key={navItems2[0].id}
          className={styles.link}
          style={
            isClockOpen ? navItems2[0].styleOpen : navItems2[0].styleClosed
          }
          onClick={() => toggleClock()}
        ></Link>
        <Link
          to={navItems2[1].id}
          key={navItems2[1].id}
          style={
            isAlarmOpen ? navItems2[1].styleOpen : navItems2[1].styleClosed
          }
          onClick={() => {
            toggleAlarm();
          }}
        ></Link>
        <Link
          to={navItems2[2].id}
          key={navItems2[2].id}
          style={
            isTimerOpen ? navItems2[2].styleOpen : navItems2[2].styleClosed
          }
          onClick={() => toggleTimer()}
        ></Link>
        <Link
          to={navItems2[3].id}
          key={navItems2[3].id}
          style={
            isStopwatchOpen ? navItems2[3].styleOpen : navItems2[3].styleClosed
          }
          onClick={() => toggleStopwatch()}
        ></Link>
      </div>
    </>
  );
};

export default Menu;
