import React, { useState } from "react";
import styles from "./ButtonSelect.module.css";

const ButtonSelect = ({ style }) => {
  const [isSelected, setIsSelected] = useState(false);

  const toggleSelectButton = () => {
    setIsSelected(!isSelected);
  };

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
