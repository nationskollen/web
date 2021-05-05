import React from 'react'
import styles from '../styles/Main.module.css'
const Main = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <p className={styles.titleText}></p>
            </div>
            <div className={styles.content}>{props.children}</div>
        </div>
    )
}

export default Main
