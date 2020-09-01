import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Menu.module.css";

const Menu = ({ reset }) => {
  // const [open, setOpen] = useState(false);
  const [isClockOpen, setIsClockOpen] = useState(true);
  const [isAlarmOpen, setIsAlarmOpen] = useState(false);
  const [isTimerOpen, setIsTimerOpen] = useState(false);
  const [isStopwatchOpen, setIsStopwatchOpen] = useState(false);

  // const toggleClass = () => {
  //   setOpen(!open);
  // };
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
      id: "Clock",
      onclick: toggleClock,
      classname: "clock",
      styleOpen: {
        zIndex: 10,
        background: "#E3F6F6",
        color: "#718E8E",
        padding: "18px",
        margin: "0",
        textDecoration: "none",
        textAlign: "center",
        fontSize: "14px",
        display: "block",
        transition: "0.3s",
        position: "fixed",
        width: "20vw",
        height: "50px",
        left: "80vw",
        top: "25px",

        boxShadow: "10px 10px 8px rgba(26, 26, 26, 0.42)",
        borderRadius: "30px 0px 0px 30px",
      },
      styleClosed: {
        zIndex: 10,
        padding: "18px",
        background: "#E3F6F6",
        color: "#718E8E",

        margin: "0",
        textDecoration: "none",
        fontSize: "14px",
        display: "block",
        transition: "0.3s",
        position: "fixed",
        width: "8vw",
        height: "50px",
        left: "92vw",
        top: "25px",

        boxShadow: "10px 10px 8px rgba(26, 26, 26, 0.42)",
        borderRadius: "30px 0px 0px 30px",
      },
    },

    {
      id: "Alarm",
      onclick: toggleAlarm,
      classname: "alarm",
      styleOpen: {
        zIndex: 10,
        background: "#FFEDED",
        color: "#A18585",

        margin: "0",
        padding: "18px",
        textDecoration: "none",
        fontSize: "14px",
        display: "block",
        transition: "0.3s",
        position: "fixed",
        width: "20vw",
        height: "50px",
        left: "80vw",
        top: "80px",

        boxShadow: "10px 10px 8px rgba(26, 26, 26, 0.42)",
        borderRadius: "30px 0px 0px 30px",
      },
      styleClosed: {
        zIndex: 10,
        background: "#FFEDED",
        color: "#A18585",

        margin: "0",
        padding: "18px",
        textDecoration: "none",
        fontSize: "14px",
        display: "block",
        transition: "0.3s",
        position: "fixed",
        width: "8vw",
        height: "50px",
        left: "92vw",
        top: "80px",

        boxShadow: "10px 10px 8px rgba(26, 26, 26, 0.42)",
        borderRadius: "30px 0px 0px 30px",
      },
    },

    {
      id: "Timer",
      onclick: toggleTimer,
      classname: "timer",
      styleOpen: {
        zIndex: 10,
        background: "#E3E3F6",
        color: "#6D6D8C",

        margin: "0",
        padding: "18px",
        textDecoration: "none",
        fontSize: "14px",
        display: "block",
        transition: "0.3s",
        position: "fixed",
        width: "20vw",
        height: "50px",
        left: "80vw",
        top: "135px",

        boxShadow: "10px 10px 8px rgba(26, 26, 26, 0.42)",
        borderRadius: "30px 0px 0px 30px",
      },
      styleClosed: {
        zIndex: 10,
        background: "#E3E3F6",
        color: "#6D6D8C",

        margin: "0",
        padding: "18px",
        textDecoration: "none",
        fontSize: "14px",
        display: "block",
        transition: "0.3s",
        position: "fixed",
        width: "8vw",
        height: "50px",
        left: "92vw",
        top: "135px",

        boxShadow: "10px 10px 8px rgba(26, 26, 26, 0.42)",
        borderRadius: "30px 0px 0px 30px",
      },
    },
    {
      id: "Stopwatch",
      onclick: toggleStopwatch,
      classname: "stopwatch",
      styleOpen: {
        zIndex: 10,
        background: "#E9F6E3",
        color: "#75886C",

        margin: "0",
        padding: "18px",
        textDecoration: "none",
        fontSize: "14px",
        display: "block",
        transition: "0.3s",
        position: "fixed",
        width: "25vw",
        height: "50px",
        left: "75vw",
        top: "190px",

        boxShadow: "10px 10px 8px rgba(26, 26, 26, 0.42)",
        borderRadius: "30px 0px 0px 30px",
      },
      styleClosed: {
        zIndex: 10,
        background: "#E9F6E3",
        color: "#75886C",

        margin: "0",
        padding: "18px",
        textDecoration: "none",
        fontSize: "14px",
        display: "block",
        transition: "0.3s",
        position: "fixed",
        width: "8vw",
        height: "50px",
        left: "92vw",
        top: "190px",

        boxShadow: "10px 10px 8px rgba(26, 26, 26, 0.42)",
        borderRadius: "30px 0px 0px 30px",
      },
    },
  ];

  return (
    <>
      {/* <div className={open ? styles.menuOpen : styles.menuClosed}> */}
      <Link
        to={navItems2[0].id}
        key={navItems2[0].id}
        className={styles.link}
        style={isClockOpen ? navItems2[0].styleOpen : navItems2[0].styleClosed}
        onClick={() => {
          toggleClock();
        }}
      >
        {isClockOpen ? navItems2[0].id : null}
      </Link>

      <Link
        to={navItems2[1].id}
        key={navItems2[1].id}
        style={isAlarmOpen ? navItems2[1].styleOpen : navItems2[1].styleClosed}
        onClick={() => {
          toggleAlarm();
          reset();
        }}
      >
        {isAlarmOpen ? navItems2[1].id : null}
      </Link>
      <Link
        to={navItems2[2].id}
        key={navItems2[2].id}
        style={isTimerOpen ? navItems2[2].styleOpen : navItems2[2].styleClosed}
        onClick={() => {
          toggleTimer();
          reset();
        }}
      >
        {isTimerOpen ? navItems2[2].id : null}
      </Link>
      <Link
        to={navItems2[3].id}
        key={navItems2[3].id}
        style={
          isStopwatchOpen ? navItems2[3].styleOpen : navItems2[3].styleClosed
        }
        onClick={() => {
          toggleStopwatch();
          reset();
        }}
      >
        {isStopwatchOpen ? navItems2[3].id : null}
      </Link>
      {/* </div> */}
    </>
  );
};

export default Menu;
