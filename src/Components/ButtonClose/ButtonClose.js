import React from "react";
import styles from "./ButtonClose.module.css";
// import ButtonSelect from "../ButtonSelect/ButtonSelect";

const ButtonClose = ({ onClick, style }) => {
  return (
    <button className={styles.button} style={style} onClick={onClick}>
      close
    </button>
  );
};

export default ButtonClose;
