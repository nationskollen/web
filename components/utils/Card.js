import React from 'react'
import styles from '../../styles/utils/Card.module.css'
import Chart from './Chart'

const Card = (props) => {
    var color = props.color
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div></div>
            </div>
            <p className={styles.title}>{props.title}</p>
            <p className={styles.info}>{props.balance}</p>
            {props.children}
        </div>
    )
}

export default Card
