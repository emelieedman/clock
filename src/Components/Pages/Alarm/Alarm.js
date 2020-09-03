import React, { useState } from "react";
import styles from "./Alarm.module.css";
import SetAlarms from "./SetAlarms";

const Alarm = ({ setHours, setMinutes, setSeconds, h, min, sec }) => {
  const [newAlarm, setNewAlarm] = useState(null);
  const [saveAlarm, setSaveAlarm] = useState(null);
  // const [timeLeft, setTimeLeft] = useState();

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
          onClick={() => setSaveAlarm(newAlarm)}
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
