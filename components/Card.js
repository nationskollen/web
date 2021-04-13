import React from 'react'
import styles from '../styles/Card.module.css'
import Chart from './Chart'

const Color = ["from-indigo-500 to-blue-500", "from-blue-400 to-blue-300", "from-green-500 to-green-400", "from-yellow-600 to-yellow-500"]


const Card = (props) => {

    var color = props.color

    return (
        <div className={styles.container} data-color={styles.color}>
            <div className={styles.main}>
                <div></div>
            </div>
            <p className={styles.title}>
                {props.title}
            </p>
            <p className={styles.info}>
                {props.balance}
            </p>
            {props.children}

        </div>
    )
}

export default Card