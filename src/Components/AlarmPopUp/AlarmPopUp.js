import React from "react";
import styles from "./AlarmPopUp.module.css";
// import ButtonSelect from "../ButtonSelect/ButtonSelect";
import ButtonClose from "../ButtonClose/ButtonClose";
// import music from "../../Assets/Peaceful-piano-and-synth-pads.mp3";

const AlarmPopUp = ({ style, setOver, over }) => {
  // const alarm = new Audio(music);

  // window.onload(alarm.play());

  const onClick = () => {
    setOver(!over);
  };

  return (
    <>
      <div className={styles.wrapperOpen}>
        <h1 className={styles.h1}>Time's up! </h1>

        <div className={styles.buttonClose}>
          <ButtonClose
            style={style}
            setOver={setOver}
            onClick={() => onClick()}
          />
        </div>
      </div>
    </>
  );
};

export default AlarmPopUp;
