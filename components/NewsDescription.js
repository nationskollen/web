import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { useConfirm } from './Confirm'

import styles from '../styles/NewsDescription.module.css'

export default function NewsDescription() {
    const [title, setTitle] = useState('')
    const [information, setInformation] = useState('')
    const { confirmation, setConfirmation, showOptions, setShowOptions } = useConfirm()

    function addDescription(title, information) {
        setShowOptions(!showOptions)
        // TODO: This doesnt work
    }

    // TODO: This might get called unintentionally
    useEffect(() => {
        // TODO: Upload to server
        if (confirmation === true) {
            console.log(title + ', ' + information)
            setConfirmation(false)
        } else console.log('noooooo')
    }, [confirmation])

    return (
        <div className={styles.inputBox}>
            <h1>Beskrivning</h1>
            <input
                className={styles.titleText}
                type="text"
                placeholder="Titel"
                value={title}
                /* TODO: Change so that the value only changes when pressing a button? */
                onChange={(event) => setTitle(event.target.value)}
            />
            <input
                className={styles.contentText}
                type="text"
                placeholder="Beskrivning..."
                value={information}
                onChange={(event) => setInformation(event.target.value)}
            />
            <button className={styles.submit} onClick={() => addDescription()}>
                Publicera
            </button>
        </div>
    )
}
