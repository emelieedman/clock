import React from "react";
import styles from "./InputField.module.css";

const InputField = ({ name, timeType, onchange, value, onSubmit }) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          className={styles.inputField}
          type="number"
          min="0"
          max="59"
          step="1"
          maxLength="2"
          name={name}
          onChange={onchange}
          value={value}
          placeholder="00"
        ></input>
      </form>
    </>
  );
};

export default InputField;
