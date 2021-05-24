import Head from 'next/head'
import Calendar from 'react-calendar'
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { useNation, useSDK, useUpload } from '@nationskollen/sdk'
import { useAsync, useAsyncCallback } from 'react-async-hook'
import { SketchPicker } from 'react-color'

import styles from '../../styles/nation/DesignPreview.module.css'

function DesignPreview(props) {
    const { accent, cover, icon, description, name } = props

    return (
        <div className={styles.nationPreview}>
            <h2>Preview</h2>
            <div className={styles.mockPhone}>
                <div style={{ backgroundColor: accent }} className={styles.statusBar} />

                <div style={{ backgroundColor: accent }} className={styles.backgroundImg}>
                    <div
                        style={{ backgroundImage: 'url(' + cover + ')' }}
                        className={styles.backColor}
                    />
                    <div style={{ backgroundImage: 'url(' + icon + ')' }} className={styles.icon} />
                </div>

                <div className={styles.description}>
                    <div className={styles.nationName}>{name}</div>
                    <p className={styles.descriptionText}>{description}</p>
                </div>
            </div>
            <p className={styles.mockDescription}>
                OBS: Denna preview representerar endsast ungefär hur appen ser ut. Själva appen kan
                se annorlunda ut.
            </p>
        </div>
    )
}

export default DesignPreview
