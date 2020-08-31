import React, { useEffect, useState } from "react";
import styles from "./Alarm.module.css";
import SetAlarms from "./SetAlarms";

const Alarm = () => {
  const [newAlarm, setNewAlarm] = useState(null);
  const [saveAlarm, setSaveAlarm] = useState(null);
  const [timeLeft, setTimeLeft] = useState();

  return (
    <>
      <div className={styles.alarm}>
        <input
          className={styles.alarm}
          type="time"
          onChange={(event) => setNewAlarm(event.target.value)}
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
        <SetAlarms
          className={styles.newAlarm}
          saveAlarm={saveAlarm}
          setSaveAlarm={setSaveAlarm}
          newAlarm={newAlarm}
          setNewAlarm={setNewAlarm}
        />
      ) : null}
    </>
  );
};

export default Alarm;
