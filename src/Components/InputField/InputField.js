import React from "react";
import styles from "./InputField.module.css";

const InputField = (props) => {
  return (
    <>
      <label HTMLfor="inputField">{props.timeType}</label>
      <input
        className={styles.inputField}
        type="number"
        id="inputField"
        name="inputField"
        onChange={props.onChange}
        value={props.value}
      ></input>
    </>
  );
};

export default InputField;
