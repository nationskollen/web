import React from 'react';
import { useState } from "react";
import styles from '../styles/DayHours.module.css';

//Creates a row with business hours for a choosen day
const ProgressBar = (props) => {
    const { day } = props;
    const [isOpen, setIsOpen] = useState(false);

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
                    type="text"
                    maxlength="5"
                    placeholder="17:00"
                />
                <span className={styles.seperator}>-</span>
                <input
                    className={styles.inputEnd}
                    type="text"
                    maxlength="5"
                    placeholder="17:00"
                    />
            </div>      
        )}

        </div>
    );
  };
  
  export default ProgressBar;