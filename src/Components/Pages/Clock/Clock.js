import React, { useEffect, useState } from "react";
import styles from "./Clock.module.css";
import AnalogClock from "../../AnalogClock/AnalogClock";

const Clock = ({ minTwoDigits }) => {
  const [minutes, setMinutes] = useState(new Date().getMinutes());
  const [hours, setHours] = useState(new Date().getHours());
  const [date, setDate] = useState(new Date().toDateString());

  useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
      setHours(new Date().getHours());
      setMinutes(new Date().getMinutes());
      setDate(new Date().toDateString());
    }, 10);
    return () => clearInterval(interval);
  });

  return (
    <>
      <AnalogClock />
      <p className={styles.time}>
        {minTwoDigits(hours) + ":" + minTwoDigits(minutes)}
      </p>
      <p className={styles.date}>{date}</p>
    </>
  );
};

export default Clock;
