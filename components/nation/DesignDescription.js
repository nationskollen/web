import Head from 'next/head'
import Calendar from 'react-calendar'
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { useNation, useSDK, useUpload } from '@nationskollen/sdk'
import { useAsync, useAsyncCallback } from 'react-async-hook'
import { SketchPicker } from 'react-color'

import { useConfirm } from '../utils/Confirm'
import styles from '../../styles/DesignDescription.module.css'

function DesignDescription(props) {
    const { update, setDescription } = props

    const { confirmation, setConfirmation, setShowOptions } = useConfirm()

    useEffect(() => {
        confirmation && update.execute()
        setConfirmation(false)
    }, [confirmation])

    return (
        <div>
            <div className={styles.choice}>
                <p className={styles.text}>Byt nationsinformation</p>
                <div>
                    <button className={styles.button} onClick={() => setShowOptions(true)}>
                        Ändra
                    </button>
                </div>
            </div>
            <form>
                <textarea
                    className={styles.descText}
                    rows="10"
                    placeholder="Beskriving..."
                    onChange={(event) => setDescription(event.target.value)}
                />
            </form>
        </div>
    )
}

export default DesignDescription
