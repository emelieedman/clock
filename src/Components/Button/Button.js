// @ts-check
import React from "react";
import styles from "./Button.module.css";

const Button = ({ onClick, text }) => {
  return (
    // <Link to={id} type="button" className={styles.button} onClick={onClick}>
    //   {img ? (
    //     <img src={img} alt="" width="25px" className={styles.img} />
    //   ) : (
    //     text
    //   )}
    // </Link>
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
