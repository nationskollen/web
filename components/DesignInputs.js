import Head from 'next/head'
import Calendar from 'react-calendar'
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { useNation, useSDK, useUpload } from '@dsp-krabby/sdk'
import { useAsync, useAsyncCallback } from 'react-async-hook'
import { SketchPicker } from 'react-color'

import styles from '../styles/DesignInputs.module.css'

function DesignInputs(props) {
    const { upload, setState, titleText, buttonText } = props

    return (
        <div className={styles.choice}>
            <p className={styles.text}>{titleText}</p>
            <div>
                <input className={styles.input} type="file" onChange={upload.onFileChanged} />
                <button className={styles.button} onClick={upload.execute}>
                    {buttonText}
                </button>
            </div>
        </div>
    )
}

export default DesignInputs
