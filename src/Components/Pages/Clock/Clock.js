import React from "react";
import styles from "./Clock.module.css";

const Clock = () => {
  const date = new Date();
  const year = date.getFullYear();

  const todaysDate = date.getUTCDate();

  const day = new Array();
  day[0] = "Monday";
  day[1] = "Tuesday";
  day[2] = "Wednesday";
  day[3] = "Thursday";
  day[4] = "Friday";
  day[5] = "Saturday";
  day[6] = "Sunday";

  const d = day[date.getDay()];

  const month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";

  const m = month[date.getMonth()];

  return (
    <>
      <p className={styles.date}>
        {d + ", " + todaysDate + ", " + m + ", " + year}
      </p>
    </>
  );
};

export default Clock;
