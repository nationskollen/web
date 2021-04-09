import React from 'react'
import styles from '../styles/Main.module.css'
const Main = () => {
    return (
        <div className={styles.container}>

            <div className={styles.title}>
                <p className={styles.titleText}>Content</p>
            </div>
            <div className={styles.content}>
                <p>random skit</p>
            </div>
        </div>
    )
}

export default Main
