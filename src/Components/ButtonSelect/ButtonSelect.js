import React from "react";
import styles from "./ButtonSelect.module.css";

const ButtonSelect = ({
  style,
  isSelected,

  toggleSelectButton,
}) => {
  console.log("isSelected?", isSelected);
  return (
    <>
      <div
        style={isSelected ? style : null}
        className={styles.background}
        onClick={() => toggleSelectButton()}
      >
        <div
          className={isSelected ? styles.buttonSelected : styles.button}
        ></div>
      </div>
    </>
  );
};

export default ButtonSelect;
