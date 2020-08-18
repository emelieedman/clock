import React from 'react'
import styles from './Button.module.css'

const Button = (props) => {
    return(
    <button type='button' id="button" className={styles.button}><img src={props.img} alt="" width="30px"/></button>
    )
}

export default Button;