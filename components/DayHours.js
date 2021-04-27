import React from 'react';
import { useState, useEffect } from "react";
import styles from '../styles/DayHours.module.css';

//Creates a row with business hours for a choosen day
const ProgressBar = (props) => {
    const { day, saveChanges } = props;
    //Set deafult value from sdk
    const [isOpen, setIsOpen] = useState(false);
    const [start, setStart] = useState("08:00");
    const [end, setEnd] = useState("20:00");

    useEffect(() => {
        console.log("performRefresh");
      }, [saveChanges])

    return (
        <div className={styles.container}>
            <div className={styles.day}>{day}</div>
            <label className={styles.switch}>
                <input type="checkbox" onChange={() => setIsOpen(!isOpen)}/>
                <span className={styles.slider}></span>
            </label>
        {!isOpen &&
            <div className={styles.secondaryContainer}>
                <div className={styles.smallText}>Closed</div>
                <div className={styles.emptyContainer}></div>
            </div>
        }
        {isOpen && (          
            <div className={styles.secondaryContainer}>
                <div className={styles.smallText}>Open</div>
                <input
                    className={styles.inputStart}
                    type="time"
                    value={start}
                    onChange={event => setStart(event.target.value)}
                />
                <span className={styles.seperator}>-</span>
                <input
                    className={styles.inputEnd}
                    type="time"
                    value={end}
                    onChange={event => setEnd(event.target.value)}
                    />
            </div>      
        )}

        </div>
    );
  };
  
  export default ProgressBar;