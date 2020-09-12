import React, { useEffect, useState } from "react";
import styles from "./Clock.module.css";
import AnalogClock from "../../AnalogClock/AnalogClock";

const Clock = ({
  // setHours,
  // setMinutes,
  // setSeconds,
  // h,
  // min,
  // sec,
  // date,
  minTwoDigits,
  // second,
  // hour,
  // minute,
}) => {
  const [seconds, setSeconds] = useState(new Date().getSeconds());
  const [minutes, setMinutes] = useState(new Date().getMinutes());
  const [hours, setHours] = useState(new Date().getHours());

  useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
      setHours(new Date().getHours());
      setMinutes(new Date().getMinutes());
      setSeconds(new Date().getSeconds());
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <>
      <AnalogClock />
      <h1 className={styles.headline}>Stockholm</h1>
      <p className={styles.time}>
        {minTwoDigits(new Date().getHours()) +
          ":" +
          minTwoDigits(new Date().getMinutes())}
      </p>
      <p className={styles.date}>{new Date().toDateString()}</p>
    </>
  );
};

export default Clock;
