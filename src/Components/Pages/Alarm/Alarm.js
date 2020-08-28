import React from "react";
import styles from "./Alarm.module.css";

const Alarm = () => {
  return <input className={styles.alarm} type="time"></input>;
};

export default Alarm;
