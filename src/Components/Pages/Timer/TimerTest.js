import React, { useState } from "react";
import styles from "./Timer.module.css";

const TimerTest = () => {
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  return (
    <>
      <AnalogClock second={second} minute={minute} hour={hour} />
      <div className={styles.inputFields}>
        <InputField
          name={hours}
          onchange={(event) => setHourInput(event.target.value)}
          value={hours}
        />
        <InputField
          name={minutes}
          onchange={(event) => setMinuteInput(event.target.value)}
          value={minutes}
        />
        <InputField
          name={seconds}
          onchange={(event) => {
            setSecondInput(event.target.value);
          }}
          value={seconds}
        />
      </div>
      <div className={styles.startResetButtons}>
        <Button
          text={"Start"}
          onClick={
            !isRunning && !over
              ? () => {
                  toggle();
                  handleStart();
                }
              : null
          }
        />
        <Button text={"pause"} onClick={() => handlePause()} />
        <Button text="Reset" onClick={() => reset()} />
      </div>

      {over ? (
        <div className={styles.popUp}>
          <AlarmPopUp
            setOver={setOver}
            over={over}
            style={{ background: "#E3E3F6" }}
          />
        </div>
      ) : null}
    </>
  );
};

export default TimerTest;
