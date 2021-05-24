import React from 'react'
import { useState, useEffect } from 'react'
import styles from '../../styles/OpeningHours.module.css'
import { useApi, useLocations } from '@nationskollen/sdk'

//Creates a row with business hours for a choosen day
const OpeningHoursDate = (props) => {
    // User automatically gets oid 400 (Vdala nation)
    // TODO Replace this row to get oid from local storage
    const oid = 400
    // const oid = localStorage.getItem('oid');

    const location = useLocations(oid)

    const { date, saveChanges } = props
    const api = useApi()
    const [openingHourData, setOpeningHourData] = useState(null)
    // const response = useAsyncCallback(() => api.openingHours.update(location, openingHourId, openingHourData));
    //TODO Set deafult values from sdk
    const [isOpen, setIsOpen] = useState(false)
    const [start, setStart] = useState('08:00')
    const [end, setEnd] = useState('20:00')

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
        console.log('Saved opening hours for ' + date)
    }, [saveChanges])

    return (
        <div className={styles.containerDate}>
            <input
                className={styles.inputDate}
                type="date"
                value={date}
                onChange={(event) => setStart(event.target.value)}
            />
            <label className={styles.switch}>
                <input type="checkbox" onChange={() => setIsOpen(!isOpen)} />
                <span className={styles.slider}></span>
            </label>
            {isOpen ? (
                <div className={styles.secondaryContainer}>
                    <div className={styles.smallText}>Open</div>
                    <input
                        className={styles.inputTime}
                        type="time"
                        value={start}
                        onChange={(event) => setStart(event.target.value)}
                    />
                    <span className={styles.seperator}>-</span>
                    <input
                        className={styles.inputTime}
                        type="time"
                        value={end}
                        onChange={(event) => setEnd(event.target.value)}
                    />
                </div>
            ) : (
                <div className={styles.secondaryContainer}>
                    <div className={styles.smallText}>Closed</div>
                </div>
            )}
        </div>
    )
}

export default OpeningHoursDate
