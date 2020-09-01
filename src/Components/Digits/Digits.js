import React from "react";
import styles from "./Digits.module.css";

const Digits = (props) => {
  return <p className={styles.nr}>{props.nr}</p>;
};

export default Digits;
