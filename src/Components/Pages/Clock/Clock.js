import React, { useEffect } from "react";
import styles from "./Clock.module.css";

const Clock = ({ setHours, setMinutes, setSeconds, h, min, sec, date }) => {
  useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
      setHours(h);
      setMinutes(min);
      setSeconds(sec);
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <>
      <h1 className={styles.headline}>Stockholm</h1>
      <p className={styles.time}>{h + ":" + min}</p>
      <p className={styles.date}>{date.toDateString()}</p>
    </>
  );
};

export default Clock;
