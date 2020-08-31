import React, { useState } from "react";
import styles from "./AlarmPopUp.module.css";
import ButtonSelect from "../ButtonSelect/ButtonSelect";
import ButtonClose from "../ButtonClose/ButtonClose";

const AlarmPopUp = ({ setOver, over, toggleSelectButton }) => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(true);

  const onclick = () => {
    setIsPopUpOpen(false);
    setOver(!over);
  };

  return (
    <>
      <div className={isPopUpOpen ? styles.wrapperOpen : styles.wrapperClosed}>
        <h1 className={styles.h1}>ALARM</h1>
        <p className={styles.h2}>snooze</p>
        <div className={styles.buttonSelect}>
          <ButtonSelect />
        </div>
        <div className={styles.buttonClose}>
          <ButtonClose setOver={setOver} onclick={onclick} />
        </div>
      </div>
    </>
  );
};

export default AlarmPopUp;
