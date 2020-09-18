import React, { useState, useEffect } from "react";
import styles from "./Alarm.module.css";
import SetAlarms from "./SetAlarms";
import AlarmPopUp from "../../AlarmPopUp/AlarmPopUp";
import AnalogClock from "../../AnalogClock/AnalogClock";

// to do: add saved alarms to an array when clicking the save button and then map the component SetAlarms to the array

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

    if (alarm < new Date()) {
      alarm.setDate(new Date().getDate() + 1);
    }

    console.log("alarm", alarm);

    setAlarmTime(alarm.getTime());
    setSaveAlarm(newAlarm);
  };

  useEffect(() => {
    let interval;

    interval = setInterval(() => {
      const now = new Date().getTime();
      if (isSelected && alarmTime && alarmTime < now) {
        clearInterval(interval);
        setOver(!over);
        console.log("alarmtime", new Date(alarmTime));
      }
    }, 10);

    return () => clearInterval(interval);
  }, [alarmTime, isSelected, over, setOver]);

  return (
    <>
      <AnalogClock />

      <div className={styles.alarm}>
        <input
          required
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
          onClick={() => (newAlarm ? saveOnClick() : null)}
        >
          &#43;
        </div>
      </div>
      {saveAlarm ? (
        <div className={styles.savedAlarm}>
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
