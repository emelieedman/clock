import React from "react";
import styles from "./ButtonClose.module.css";
import ButtonSelect from "../ButtonSelect/ButtonSelect";

const ButtonClose = ({ setOver, onclick }) => {
  return (
    <button className={styles.button} onClick={onclick}>
      Stop
    </button>
  );
};

export default ButtonClose;
