import React, { useState } from "react";
import styles from "./ButtonSelect.module.css";

const ButtonSelect = () => {
  const [isSelected, setIsSelected] = useState(false);

  const toggleSelectButton = () => {
    setIsSelected(!isSelected);
  };

  console.log("isSelected?", isSelected);
  return (
    <>
      <div
        className={isSelected ? styles.backgroundSelected : styles.background}
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
