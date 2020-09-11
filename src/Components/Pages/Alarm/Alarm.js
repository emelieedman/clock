import React, { useState, useEffect } from "react";
import styles from "./Alarm.module.css";
import SetAlarms from "./SetAlarms";
import AlarmPopUp from "../../AlarmPopUp/AlarmPopUp";

const ss = 1000;
const mm = ss * 60;
const hh = mm * 60;

const Alarm = ({ isSelected, setIsSelected, over, setOver }) => {
  const [newAlarm, setNewAlarm] = useState();
  const [saveAlarm, setSaveAlarm] = useState();

  const [alarmTime, setAlarmTime] = useState();
  const [timeLeft, setTimeLeft] = useState();

  console.log("alarmTime", alarmTime);

  useEffect(() => {
    let interval;

    interval = setInterval(() => {
      const now = new Date().getTime();
      if (alarmTime && alarmTime < now) {
        clearInterval(interval);
        setOver(!over);
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
          onChange={(event) => {
            setNewAlarm(event.target.value);
          }}
          autoFocus
        ></input>
        <br></br>
        <div
          className={styles.saveButton}
          onClick={() => {
            const hours = parseInt(newAlarm.split(":")[0]);
            const minutes = parseInt(newAlarm.split(":")[1]);

            const alarm = new Date();
            alarm.setHours(hours);
            alarm.setMinutes(minutes);
            alarm.setSeconds(0);

            const alarmToMilliSec = alarm.getTime();
            setAlarmTime(alarmToMilliSec);
            setSaveAlarm(newAlarm);
            console.log("alarmTime", alarmTime);
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
            isSelected={isSelected}
            setIsSelected={setIsSelected}
          />
        </div>
      ) : null}
      {over ? (
        <AlarmPopUp
          over={over}
          setOver={setOver}
          style={{ background: "#F6D4D4" }}
        />
      ) : null}
    </>
  );
};

export default Alarm;
