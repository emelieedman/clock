// @ts-check
import React from "react";
import styles from "./Button.module.css";

const Button = ({ onClick, img, text }) => {
  return (
    <button type="button" className={styles.button} onClick={onClick}>
      {img ? <img src={img} alt="" width="30px" /> : text}
    </button>
  );
};

export default Button;
