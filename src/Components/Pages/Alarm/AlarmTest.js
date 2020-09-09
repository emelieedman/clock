import React, { useState, useEffect } from "react";
import styles from "./Alarm.module.css";
import SetAlarms from "./SetAlarms";

const ss = 1000;
const mm = ss * 60;
const hh = mm * 60;

const savedAlarm = String(saveAlarm).split(":");
const savedAlarmHours = parseInt(savedAlarm[0]);
const savedAlarmMinutes = parseInt(savedAlarm[1]);
const savedHoursToMilliSec = savedAlarmHours * hh;
const savedMinutesToMilliSec = savedAlarmMinutes * mm;
const savedAlarmMilliSec = savedHoursToMilliSec + savedMinutesToMilliSec;

const difference = new Date().getTime() - savedAlarmMilliSec;

const addSecondsToDate = (date) => {
  return new Date(date.setTime(date.getTime() + (date.getTime() - difference)));
};

const AlarmTest = ({ over, setOver }) => {
  const [newAlarm, setNewAlarm] = useState();
  const [saveAlarm, setSaveAlarm] = useState();

  const [alarmTime] = useState(addSecondsToDate(new Date()));
  const [timeLeft, setTimeLeft] = useState(alarmTime - new Date().getTime());

  useEffect(() => {
    let interval;
    interval = setInterval(() => {
      const currentTime = new Date();

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

  //   const currentHour = new Date().getHours();
  //   const currentMinutes = new Date().getMinutes();
  //   const currentHourToMilliSec = currentHour * hh;
  //   const currentMinutesToMilliSec = currentMinutes * mm;

  //   const now = currentHourToMilliSec + currentMinutesToMilliSec;
  //   const nowSec = now / ss;
  //   const end = savedHoursToMilliSec + savedMinutesToMilliSec;
  //   const endSec = end / ss;

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

export default AlarmTest;
