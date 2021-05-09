import Head from 'next/head'
import Calendar from 'react-calendar'
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { useNation, useSDK, useUpload } from '@nationskollen/sdk'
import { useAsync, useAsyncCallback } from 'react-async-hook'
import { SketchPicker } from 'react-color'

import styles from '../styles/DesignColor.module.css'

function DesignColor(props) {
    const [showPicker, setShowPicker] = useState(false)

    const { update, setAccent, color } = props

    return (
        <div className={styles.choice}>
            <p className={styles.text}>Byt nationsfärg</p>
            <div className={styles.colorChoice}>
                <div className={styles.colorPickerDiv}>
                    <button
                        className={styles.colorButton}
                        onClick={() => setShowPicker(!showPicker)}
                    >
                        Välj färg
                    </button>
                    <span
                        style={{ backgroundColor: color, border: color }}
                        className={styles.accentColor}
                    />

                    {showPicker && (
                        <SketchPicker
                            className={styles.colorPicker}
                            color={color}
                            onChange={(color) => setAccent(color.hex)}
                        />
                    )}
                </div>
                <button className={styles.button} onClick={update.execute}>
                    Ändra färg
                </button>
            </div>
        </div>
    )
}

export default DesignColor
