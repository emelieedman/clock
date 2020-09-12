import React, { useState, useEffect } from "react";
import styles from "./Alarm.module.css";
import SetAlarms from "./SetAlarms";
import AlarmPopUp from "../../AlarmPopUp/AlarmPopUp";
import AnalogClock from "../../AnalogClock/AnalogClock";

// to do: add saved alarms to an array when clicking the save button and then map the component SetAlarms to the array
// fix the if statement so that if you set an alarm that has already passed it adds 24h

const Alarm = ({ over, setOver }) => {
  const [newAlarm, setNewAlarm] = useState();
  const [saveAlarm, setSaveAlarm] = useState();

  const [alarmTime, setAlarmTime] = useState();
  const [isSelected, setIsSelected] = useState(true);

  const toggleSelectButton = () => {
    setIsSelected(!isSelected);
  };

  const saveOnClick = () => {
    const hours = parseInt(newAlarm.split(":")[0]);
    const minutes = parseInt(newAlarm.split(":")[1]);

    const alarm = new Date();
    alarm.setHours(hours);
    alarm.setMinutes(minutes);
    alarm.setSeconds(0);

    const alarmToMilliSec = alarm.getTime();
    setAlarmTime(alarmToMilliSec);
    setSaveAlarm(newAlarm);
  };

  useEffect(() => {
    let interval;

    interval = setInterval(() => {
      const now = new Date().getTime();
      if (isSelected && alarmTime && alarmTime < now) {
        clearInterval(interval);
        setOver(!over);
      }
      // else if (isSelected && alarmTime && alarmTime < now) {
      //   setAlarmTime(alarmTime + 24 * hh);
      // }
    }, 10);

    return () => clearInterval(interval);
  }, [alarmTime, isSelected, over, setOver]);

  return (
    <>
      <AnalogClock />

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
            saveOnClick();
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
            toggleSelectButton={toggleSelectButton}
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
