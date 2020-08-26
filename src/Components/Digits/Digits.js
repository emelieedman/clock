import React from "react";
import styles from "./Digits.module.css";

const Digits = (props) => {
  return (
    <div className={styles.digitalBox}>
      <p className={styles.nr}>{props.nr}</p>
    </div>
  );
};

export default Digits;
