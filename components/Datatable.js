import React, { useState, useEffect } from 'react'
import * as Icons from 'react-icons/hi'
import { useAsyncCallback } from 'react-async-hook'
import { useApi, useEvents } from '@nationskollen/sdk'

import Confirm, { useConfirm } from './Confirm'
import styles from '../styles/Datatable.module.css'

var translation = {
    //TODO Add better descriptions
    name: 'Name',
    short_description: 'Description',
    location_id: 'Location',
    occurs_at: 'Start Time',
    ends_at: 'End Time',
}

function translate(word) {
    return translation[word]
}

export default function Datatable({ data, mutate, oid }) {
    const columns = ['name', 'short_description', 'occurs_at', 'ends_at']

    const { confirmation, setConfirmation, setShowOptions } = useConfirm()


    const [ eventId, setEventId ] = useState();
    const api = useApi();
    //console.log("oid " + oid)
    // console.log(data)
    // console.log(mutate)
   

    const deleteEvent = useAsyncCallback(() => api.events.delete( oid, eventId));

    function removeEvent(eventToRemove) {
        console.log(eventToRemove);
        setEventId(eventToRemove);
        setShowOptions(true);
        //console.log(confirmation)
    }
    
    useEffect(() => {
        console.log(confirmation)
        confirmation && deleteEvent.execute()
        setConfirmation(false)
    }, [confirmation])



    return (
        
            
        <table cellPadding={0} cellSpacing={0} className={styles.table}>
            <thead className={styles.thead}>
                <tr className={styles.tr}>
                    <th className={styles.th}>Select</th>
                    {data[0] &&
                        columns.map((heading) => (
                            <th className={styles.th}>{translate(heading)}</th>
                        ))}
                    <th className={styles.th}>Actions</th>
                </tr>
            </thead>
            <tbody className={styles.tbody}>
                {data.map((row) => (
                    <tr>
                        <td className={styles.td}>
                            <input type="checkbox" />
                        </td>
                        {columns.map((columns) => (
                            <td className={styles.td}>{row[columns]}</td>
                        ))}
                        <td className={styles.td}>
                            <div className={styles.icons}>
                                <a className={styles.icon} href="/addevents">
                                    <Icons.HiPencil />
                                </a>
                                <a className={styles.icon} onClick={() => removeEvent(row.id)}/*href="javascript:removeEvent({row});"*/>
                                    <Icons.HiTrash />
                                </a>
                            </div>
                            {row.id}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        
        // </ConfirmProvider>
    )
}
