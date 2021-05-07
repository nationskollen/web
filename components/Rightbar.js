import React from 'react'
import Calendar from 'react-calendar'
import { useState, useEffect, State } from 'react'

import styles from '../styles/Rightbar.module.css'
import calendar from '../styles/Calendar.module.css'

const Rightbar = (props) => {
    const [value, onChange] = useState(new Date())
    var state = {
        date: new Date(),
    }

    return (
        <div className={styles.container}>
            <div className={styles.border}>
                <p className={styles.title}></p>
            </div>
            <div>{props.children}</div>
            {/* <p>{this.state.selectedDate.format('YYYY-MM-DD')} </p> */}
        </div>
    )
}

export default Rightbar
