import Head from 'next/head'
import Calendar from 'react-calendar'
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { useNation, useSDK, useUpload } from '@nationskollen/sdk'
import { useAsync, useAsyncCallback } from 'react-async-hook'
import { SketchPicker } from 'react-color'

import { useConfirm } from './Confirm'
import styles from '../styles/DesignInputs.module.css'

function DesignInputs(props) {
    const { upload, setState, titleText, buttonText } = props

    const { confirmation, setConfirmation, showOptions, setShowOptions } = useConfirm()

    useEffect(() => {
        confirmation && upload.execute()
        confirmation && console.log('brr')
        console.log('blablabla')
        setConfirmation(false)
    }, [confirmation])

    return (
        <div className={styles.choice}>
            <p className={styles.text}>{titleText}</p>
            <div>
                <input className={styles.input} type="file" onChange={upload.onFileChanged} />
                <button className={styles.button} onClick={() => setShowOptions(true)}>
                    {buttonText}
                </button>
            </div>
        </div>
    )
}

export default DesignInputs
