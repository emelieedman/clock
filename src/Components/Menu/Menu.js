import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Menu.module.css";

const Menu = () => {
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

        <Link className={styles.link} to="clock" onClick={() => toggleClass()}>
          Clock
        </Link>
        <Link className={styles.link} to="alarm" onClick={() => toggleClass()}>
          Alarm
        </Link>
        <Link className={styles.link} to="timer" onClick={() => toggleClass()}>
          Timer
        </Link>
        <Link
          className={styles.link}
          to="stopwatch"
          onClick={() => toggleClass()}
        >
          Stopwatch
        </Link>
      </div>
    </>
  );
};

export default Menu;
