import React, { useState } from "react";
import styles from "./AlarmPopUp.module.css";
import ButtonSelect from "../ButtonSelect/ButtonSelect";
import ButtonClose from "../ButtonClose/ButtonClose";

const AlarmPopUp = ({ setOver, over }) => {
  const onclick = () => {
    setOver(!over);
  };

  return (
    <>
      <div className={styles.wrapperOpen}>
        <h1 className={styles.h1}>
          Time's up! <section className={styles.peace}>&#9996;</section>
        </h1>
        {/* <p className={styles.h2}>snooze</p>
        <div className={styles.buttonSelect}>
          <ButtonSelect
            style={{
              background: "#E3E3F6",
              width: "70px",
              height: "30px",
              boxShadow: "inset 4px 4px 4px rgba(0, 0, 0, 0.25)",
              borderRadius: "30px",
            }}
          />
        </div> */}
        <div className={styles.buttonClose}>
          <ButtonClose
            style={{ background: "#E3E3F6" }}
            setOver={setOver}
            onclick={onclick}
          />
        </div>
      </div>
    </>
  );
};

export default AlarmPopUp;
