import React from "react";
import styles from "./styles.module.css"

const DigitalBox = (props) => {
    return (
        <div className={styles.digitalBox}> 
            <p className={styles.nr}>{props.nr}</p>
        </div>
       
    )
}

export default DigitalBox;