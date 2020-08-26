import React, { useEffect } from "react";
import styles from "./Clock.module.css";

const Clock = ({
  hours,
  setHours,
  minutes,
  setMinutes,
  seconds,
  setSeconds,
}) => {
  const date = new Date();
  const h = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();

  console.log(sec);
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
      <p className={styles.date}>{date.toDateString()}</p>
    </>
  );
};

export default Clock;
