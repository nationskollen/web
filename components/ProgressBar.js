import React from 'react'
import styles from '../styles/ProgressBar.module.css'

//Creates a progress bar depending on how completed the progress is
//in a scale from 0 to 100
const ProgressBar = (props) => {
    const { completed } = props

    const bgcolor = () => {
        if (completed < 40) return '#00ff00'
        if (completed < 60) return '#ffff00'
        if (completed < 80) return '#ff7f00'
        if (completed < 99) return '#ff3300'
        return '#ff0000'
    }

    const barStyle = {
        width: completed + '%',
        backgroundColor: bgcolor(),
    }

    return (
        <div className={styles.container}>
            <div className={styles.bar}>
                <div className={styles.fillBar} style={barStyle}></div>
            </div>
        </div>
    )
}

export default ProgressBar
