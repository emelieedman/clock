import React from "react";
import styles from "./ButtonClose.module.css";
import ButtonSelect from "../ButtonSelect/ButtonSelect";

const ButtonClose = ({ onclick, style }) => {
  return (
    <button className={styles.button} style={style} onClick={onclick}>
      Close
    </button>
  );
};

export default ButtonClose;
