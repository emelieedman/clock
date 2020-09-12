import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Menu.module.css";

const Menu = ({}) => {
  const [isClockOpen, setIsClockOpen] = useState(true);
  const [isAlarmOpen, setIsAlarmOpen] = useState(false);
  const [isTimerOpen, setIsTimerOpen] = useState(false);
  const [isStopwatchOpen, setIsStopwatchOpen] = useState(false);

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
  // const [open, setOpen] = useState(false);

  // const toggleClass = () => {
  //   setOpen(!open);
  // };

  const navItems = [
    {
      id: "clock",
      onclick: toggleClock,
      classname: "clock",
      styleOpen: {
        zIndex: 10,
        position: "fixed",
        top: "25px",
        left: "80vw",
        width: "20vw",
        height: "50px",
        padding: "18px",

        background: "#C1E9F2",
        boxShadow: "10px 10px 8px rgba(26, 26, 26, 0.42)",
        borderRadius: "30px 0px 0px 30px",

        color: "black",
        textDecoration: "none",
        textAlign: "center",
        fontSize: "14px",
        outline: "none",

        transition: "0.3s",
      },

      styleClosed: {
        zIndex: 10,
        position: "fixed",
        top: "25px",
        left: "85vw",
        width: "15vw",
        height: "50px",
        padding: "18px",

        background: "rgba(74, 74, 74, 0.3)",
        boxShadow: "10px 10px 8px rgba(26, 26, 26, 0.42)",
        borderRadius: "30px 0px 0px 30px",

        color: "black",
        textDecoration: "none",
        fontSize: "14px",
        outline: "none",

        transition: "0.3s",
      },
    },

    {
      id: "alarm",
      onclick: toggleAlarm,
      classname: "alarm",
      styleOpen: {
        zIndex: 10,
        position: "fixed",
        top: "80px",
        left: "80vw",
        width: "20vw",
        height: "50px",
        padding: "18px",

        background: "#F6D4D4",
        boxShadow: "10px 10px 8px rgba(26, 26, 26, 0.42)",
        borderRadius: "30px 0px 0px 30px",

        color: "black",
        outline: "none",
        textDecoration: "none",
        fontSize: "14px",

        transition: "0.3s",
      },
      styleClosed: {
        zIndex: 10,
        position: "fixed",
        top: "80px",
        left: "85vw",
        width: "15vw",
        height: "50px",
        padding: "18px",

        background: "rgba(74, 74, 74, 0.3)",
        boxShadow: "10px 10px 8px rgba(26, 26, 26, 0.42)",
        borderRadius: "30px 0px 0px 30px",

        color: "black",
        outline: "none",
        textDecoration: "none",
        fontSize: "14px",

        transition: "0.3s",
      },
    },

    {
      id: "timer",
      onclick: toggleTimer,
      classname: "timer",
      styleOpen: {
        zIndex: 10,
        position: "fixed",
        top: "135px",
        left: "80vw",
        width: "20vw",
        height: "50px",
        padding: "18px",

        background: "#DFD4F6",
        boxShadow: "10px 10px 8px rgba(26, 26, 26, 0.42)",
        borderRadius: "30px 0px 0px 30px",

        color: "black",
        textDecoration: "none",
        fontSize: "14px",
        outline: "none",

        transition: "0.3s",
      },
      styleClosed: {
        zIndex: 10,
        position: "fixed",
        top: "135px",
        left: "85vw",
        width: "15vw",
        height: "50px",
        padding: "18px",

        background: "rgba(74, 74, 74, 0.3)",
        boxShadow: "10px 10px 8px rgba(26, 26, 26, 0.42)",
        borderRadius: "30px 0px 0px 30px",

        color: "black",
        textDecoration: "none",
        fontSize: "14px",
        outline: "none",

        transition: "0.3s",
      },
    },
    {
      id: "stopwatch",
      onclick: toggleStopwatch,
      classname: "stopwatch",
      styleOpen: {
        zIndex: 10,
        position: "fixed",
        top: "190px",
        left: "75vw",
        width: "25vw",
        height: "50px",
        padding: "18px",

        background: "#D0F9BE",
        boxShadow: "10px 10px 8px rgba(26, 26, 26, 0.42)",
        borderRadius: "30px 0px 0px 30px",

        color: "black",
        textDecoration: "none",
        fontSize: "14px",
        outline: "none",

        transition: "0.3s",
      },
      styleClosed: {
        zIndex: 10,
        position: "fixed",
        top: "190px",
        left: "85vw",
        width: "15vw",
        height: "50px",
        padding: "18px",
        background: "rgba(74, 74, 74, 0.3)",
        boxShadow: "10px 10px 8px rgba(26, 26, 26, 0.42)",
        borderRadius: "30px 0px 0px 30px",
        color: "black",
        textDecoration: "none",
        fontSize: "14px",
        outline: "none",
        transition: "0.3s",
      },
    },
  ];

  return (
    <>
      <div className={styles.link}>
        <Link
          to={navItems[0].id}
          key={navItems[0].id}
          style={isClockOpen ? navItems[0].styleOpen : navItems[0].styleClosed}
          onClick={() => {
            toggleClock();
          }}
        >
          {isClockOpen ? navItems[0].id : null}
        </Link>
      </div>

      <Link
        to={navItems[1].id}
        key={navItems[1].id}
        style={isAlarmOpen ? navItems[1].styleOpen : navItems[1].styleClosed}
        onClick={() => {
          toggleAlarm();
          // reset();
        }}
      >
        {isAlarmOpen ? navItems[1].id : null}
      </Link>
      <Link
        to={navItems[2].id}
        key={navItems[2].id}
        style={isTimerOpen ? navItems[2].styleOpen : navItems[2].styleClosed}
        onClick={() => {
          toggleTimer();
          // reset();
        }}
      >
        {isTimerOpen ? navItems[2].id : null}
      </Link>

      <Link
        to={navItems[3].id}
        key={navItems[3].id}
        style={
          isStopwatchOpen ? navItems[3].styleOpen : navItems[3].styleClosed
        }
        onClick={() => {
          toggleStopwatch();
          // reset();
        }}
      >
        {isStopwatchOpen ? navItems[3].id : null}
      </Link>
    </>
  );
};

export default Menu;
