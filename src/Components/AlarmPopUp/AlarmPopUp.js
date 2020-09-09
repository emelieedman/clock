import React from "react";
import styles from "./AlarmPopUp.module.css";
// import ButtonSelect from "../ButtonSelect/ButtonSelect";
import ButtonClose from "../ButtonClose/ButtonClose";

const AlarmPopUp = ({ setOver, over }) => {
  const onClick = () => {
    setOver(!over);
  };

  const vibrate = () =>
    window.navigator.vibrate([
      100,
      30,
      100,
      30,
      100,
      30,
      200,
      30,
      200,
      30,
      200,
      30,
      100,
      30,
      100,
      30,
      100,
    ]);

  const stopVibration = () => window.navigator.vibrate([0]);

  vibrate();

  return (
    <>
      <div className={styles.wrapperOpen}>
        <h1 className={styles.h1}>Time's up! </h1>
        {/* <p className={styles.h2}>snooze</p>
        <div className={styles.buttonSelect}>
          <ButtonSelect
            style={{
              background: "#E3E3F6",
              width: "70px",
              height: "30px",
              boxShadow: "inset 4px 4px 4px rgba(0, 0, 0, 0.25)",
              borderRadius: "30px",
            }}
          />
        </div> */}
        <div className={styles.buttonClose}>
          <ButtonClose
            style={{ background: "#E3E3F6" }}
            setOver={setOver}
            onClick={() => onClick()}
          />
        </div>
      </div>
    </>
  );
};

export default AlarmPopUp;
