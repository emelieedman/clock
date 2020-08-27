import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Menu.module.css";

const Menu = ({ reset }) => {
  const [open, setOpen] = useState(false);

  const toggleClass = () => {
    setOpen(!open);
  };

  return (
    <>
      <div
        className={open ? styles.menuBtnOpen : styles.menuBtnClosed}
        onClick={() => toggleClass()}
      ></div>
      <div className={open ? styles.menuOpen : styles.menuClosed}>
        <div className={styles.menuBtn} onClick={() => toggleClass()}></div>

        <Link
          className={styles.link}
          to="clock"
          onClick={() => {
            toggleClass();
            reset();
          }}
        >
          Clock
        </Link>
        <Link
          className={styles.link}
          to="alarm"
          onClick={() => {
            toggleClass();
            reset();
          }}
        >
          Alarm
        </Link>
        <Link
          className={styles.link}
          to="timer"
          onClick={() => {
            toggleClass();
            reset();
          }}
        >
          Timer
        </Link>
        <Link
          className={styles.link}
          to="stopwatch"
          onClick={() => {
            toggleClass();
            reset();
          }}
        >
          Stopwatch
        </Link>
      </div>
    </>
  );
};

export default Menu;
