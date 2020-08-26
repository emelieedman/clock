import React from "react";
import styles from "./InputField.module.css";

const InputField = (props) => {
  return (
    <>
      <input
        className={styles.inputField}
        type="number"
        name="inputField"
        onChange={props.onChange}
        value={props.value}
        min="0"
      ></input>
    </>
  );
};

export default InputField;
