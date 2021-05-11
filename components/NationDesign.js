import Head from 'next/head'
import Calendar from 'react-calendar'
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { useNation, useSDK, useUpload } from '@nationskollen/sdk'
import { useAsync, useAsyncCallback } from 'react-async-hook'
import { SketchPicker } from 'react-color'

import Confirm, { ConfirmProvider } from './Confirm'

import styles from '../styles/NationDesign.module.css'
import DesignPreview from './DesignPreview'
import DesignInputs from './DesignInputs'
import DesignColor from './DesignColor'
import DesignDescription from './DesignDescription'

export function NationDesign({ data }) {
    const [cover, setCover] = useState(data.cover_img_src)
    const [icon, setIcon] = useState(data.icon_img_src)
    const [description, setDescription] = useState(data.description)
    const [accent, setAccent] = useState(data.accent_color)

    const { api, user } = useSDK()
    const uploadCover = useUpload(api.nations.upload, [data.oid, 'cover'])
    const uploadIcon = useUpload(api.nations.upload, [data.oid, 'icon'])

    const updateDesc = useAsyncCallback(() =>
        api.nations.update(data.oid, { description: description })
    )

    const updateAccent = useAsyncCallback(() =>
        api.nations.update(data.oid, { accent_color: accent })
    )

    useEffect(() => {
        uploadIcon.result && setIcon(uploadIcon.result.icon_img_src)
    }, [uploadIcon.result])

    useEffect(() => {
        uploadCover.result && setCover(uploadCover.result.cover_img_src)
    }, [uploadCover.result])

    /// TODO: Refactoring
    return (
        <div className={styles.pageContainer}>
            <div className={styles.nationOptions}>
                <h2>Configure design</h2>
                <ConfirmProvider>
                    <DesignInputs
                        upload={uploadIcon}
                        setState={setIcon}
                        titleText="Byt ikon"
                        buttonText="Ladda upp"
                    />
                    <Confirm />
                </ConfirmProvider>
                <ConfirmProvider>
                    <DesignInputs
                        upload={uploadCover}
                        setState={setCover}
                        titleText="Byt bakgrundsbild"
                        buttonText="Ladda upp"
                    />
                    <Confirm />
                </ConfirmProvider>

                <ConfirmProvider>
                    <DesignColor update={updateAccent} setAccent={setAccent} color={accent} />
                    <Confirm />
                </ConfirmProvider>
                <ConfirmProvider>
                    <DesignDescription update={updateDesc} setDescription={setDescription} />
                    <Confirm />
                </ConfirmProvider>
            </div>

            <DesignPreview
                accent={accent}
                cover={cover}
                icon={icon}
                description={description}
                name={data.name}
            />
        </div>
    )
}

export default NationDesign
