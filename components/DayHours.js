import React from 'react';
import { useState, useEffect } from "react";
import styles from '../styles/DayHours.module.css';
import { useAsyncCallback } from 'react-async-hook'
import { useApi, useLocations } from '@dsp-krabby/sdk'

//Creates a row with business hours for a choosen day
const DayHours = (props) => {
    // User automatically gets oid 400 (Vdala nation)
    // TODO Replace this row to get oid from local storage
    const oid = 400;
    // const oid = localStorage.getItem('oid');

    const location = useLocations(oid);

    const { day, saveChanges } = props;
    const api = useApi();
    const [openingHourData, setOpeningHourData] = useState(null);
    // const response = useAsyncCallback(() => api.openingHours.update(location, openingHourId, openingHourData));
    //TODO Set deafult values from sdk
    const [isOpen, setIsOpen] = useState(false);
    const [start, setStart] = useState("08:00");
    const [end, setEnd] = useState("20:00");


    const dayToNumber = day => {
        switch (day) {
            case "Monday":
                return 0
            case "Tuesday":
                return 1
            case "Wednesday":
                return 2
            case "Thursday":
                return 3
            case "Friday":
                return 4
            case "Saturday":
                return 5
            case "Sunday":
                return 6
            default:
                return 7
        }
    }
    useEffect(() => {
        //TODO Set values in sdk
        // setOpeningHourData({
        //     ...openingHourData,
        //     day:        dayToNumber(day),
        //     open:       start,
        //     close:      end,
        //     is_open:    isOpen
        // })
        // response.execute();
        console.log("Saved opening hours for " + day);
      }, [saveChanges])

    return (
        <div className={styles.container}>
            <div className={styles.day}>{day}</div>
            <label className={styles.switch}>
                <input type="checkbox" onChange={() => setIsOpen(!isOpen)}/>
                <span className={styles.slider}></span>
            </label>
        {isOpen ? (          
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
        ) : (
            <div className={styles.secondaryContainer}>
                <div className={styles.smallText}>Closed</div>
                <div className={styles.emptyContainer}></div>
            </div>
        )}

        </div>
    );
  };
  
  export default DayHours;