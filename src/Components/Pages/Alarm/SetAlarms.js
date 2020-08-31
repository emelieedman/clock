import React from "react";
import styles from "./SetAlarms.module.css";
import ButtonSelect from "../../ButtonSelect/ButtonSelect";

const SetAlarms = ({
  saveAlarm,
  setSaveAlarm,
  isSelected,
  toggleSelectButton,
}) => {
  return (
    <>
      <div className={styles.newAlarm}>
        <p className={styles.time}>{saveAlarm}</p>
        <div className={styles.buttonSelect}>
          <ButtonSelect
            isSelected={isSelected}
            toggleSelectButton={toggleSelectButton}
          />
        </div>
        <div
          className={styles.buttonRemove}
          onClick={() => {
            setSaveAlarm(null);
          }}
        >
          &#10005;
        </div>
      </div>
    </>
  );
};

export default SetAlarms;
