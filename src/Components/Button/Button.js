// @ts-check
import React from "react";
import styles from "./Button.module.css";
import { Link } from "react-router-dom";

const Button = ({ onClick, img, text, id }) => {
  return (
    <Link to={id} type="button" className={styles.button} onClick={onClick}>
      {img ? <img src={img} alt="" width="25px" /> : text}
    </Link>
  );
};

export default Button;
