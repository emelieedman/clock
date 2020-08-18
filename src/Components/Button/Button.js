import React from 'react'
import styles from './Button.module.css'

const Button = (props) => {
    return(
    props.img ? 
    <button type='button' id="button" className={styles.button}><img src={props.img} alt="" width="30px"/></button>
    : <button type='button' id="button" className={styles.button}>{props.text}</button>
    )
}

export default Button;