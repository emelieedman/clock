import React from "react";
import styles from "./LinkComponent.module.css";
import { Link } from "react-router-dom";

const LinkComponent = ({
  id,
  toggleClass,
  reset,
  text,
  onclick,
  background,
  style,
  // classname,
}) => {
  return (
    <Link
      // style={{ background: `${background}` }}
      // put classname in the item object and pass in as props
      classname={styles.link}
      style={style}
      id={id}
      to={id}
      onClick={() => {
        toggleClass();
        onclick();
        reset();
      }}
    >
      {text}
    </Link>
  );
};
export default LinkComponent;
