import React, { useState, useEffect } from "react";
import styles from "./Alarm.module.css";
import SetAlarms from "./SetAlarms";

const addSecondsToDate = (date, seconds) => {
  return new Date(date.setTime(date.getTime() + seconds * 1000));
};

const Alarm = ({ over, setOver }) => {
  const [newAlarm, setNewAlarm] = useState(null);
  const [saveAlarm, setSaveAlarm] = useState(null);
  const [alarmTime] = useState(addSecondsToDate(new Date(), saveAlarm));
  const [timeLeft, setTimeLeft] = useState();

  useEffect(() => {
    const currentTime = new Date();
    let interval;
    interval = setInterval(() => {
      if (alarmTime < currentTime) {
        clearInterval(interval);
        setTimeLeft(0);
        alert("riiiing");
      } else {
        setTimeLeft(alarmTime - currentTime.getTime());
      }
    }, 10);

    return () => clearInterval(interval);
  }, [alarmTime]);

  return (
    <>
      <div className={styles.alarm}>
        <input
          className={styles.alarm}
          type="time"
          onChange={(event) => setNewAlarm(event.target.value)}
          autoFocus
        ></input>
        <br></br>
        <div
          className={styles.saveButton}
          onClick={() => {
            setSaveAlarm(newAlarm);
          }}
        >
          &#43;
        </div>
      </div>
      {saveAlarm ? (
        <div className={styles.newAlarm}>
          <SetAlarms
            saveAlarm={saveAlarm}
            setSaveAlarm={setSaveAlarm}
            newAlarm={newAlarm}
            setNewAlarm={setNewAlarm}
          />
        </div>
      ) : null}
    </>
  );
};

export default Alarm;
