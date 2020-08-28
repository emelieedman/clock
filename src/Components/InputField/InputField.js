import React from "react";
import styles from "./InputField.module.css";

const InputField = (props) => {
  return (
    <>
      <input
        className={styles.inputField}
        type="number"
        min="0"
        max="59"
        step="1"
        maxLength="2"
        name="inputField"
        onChange={props.onChange}
        value={props.value}
        min="0"
        placeholder="00"
      ></input>

      <p className={styles.timeType}>{props.timeType}</p>
    </>
  );
};

export default InputField;
