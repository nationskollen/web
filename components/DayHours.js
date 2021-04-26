import React from 'react';
import { useState } from "react";
import styles from '../styles/DayHours.module.css';

//Creates a row with business hours for a choosen day
const ProgressBar = (props) => {
    const { day } = props;
    const [isOpen, setIsOpen] = useState(true);

    const changeState = (checked) => {
        if (isOpen) setIsOpen(false);
        else        setIsOpen(true);
    }

    return (
        <div className={styles.container}>
            <div className={styles.day}>{day}</div>
            <label className={styles.switch}>
                <input type="checkbox"/>
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
                    placebolder="17:00"
                />
                <div className={styles.secondaryContainer}>-</div>
                <input
                    className={styles.inputEnd}
                    type="text"
                    maxlength="5"
                    value="17:00"
                    />
            </div>      
        )}

        </div>
    );
  };
  
  export default ProgressBar;