import React, { useEffect, useState } from "react";
import styles from "./AnalogClock.module.css";
import blackBackground from "../../Assets/black-bump.svg";

const deg = 6;

const AnalogClock = () => {
  const [seconds, setSeconds] = useState(new Date().getSeconds());
  const [minutes, setMinutes] = useState(new Date().getMinutes());
  const [hours, setHours] = useState(new Date().getHours());

  let second = seconds * deg;
  let minute = minutes * deg;
  let hour = hours * deg * 5;

  useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
      setHours(new Date().getHours());
      setMinutes(new Date().getMinutes());
      setSeconds(new Date().getSeconds());
    }, 10);
    return () => clearInterval(interval);
  }, [seconds]);
  return (
    <>
      <div className={styles.backgroundOverlay}></div>

      <img
        src={blackBackground}
        alt=""
        className={styles.backgroundImg}
        style={{
          zIndex: "0",
          display: "block",
          width: "100vw",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      <div className={styles.clock}>
        <div className={styles.clockNav} />
        <div
          className={styles.secondHand}
          style={{
            transform: `rotate(${second}deg) `,
          }}
        />
        <div
          className={styles.minuteHand}
          style={{
            transform: `rotate(${minute}deg) `,
          }}
        />
        <div
          className={styles.hourHand}
          style={{
            transform: `rotate(${hour}deg) `,
          }}
        />
      </div>
    </>
  );
};

export default AnalogClock;
