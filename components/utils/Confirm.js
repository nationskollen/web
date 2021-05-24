import Head from 'next/head'
import React, { useState, useContext, useEffect, createContext } from 'react'
import ReactDOM from 'react-dom'

import styles from '../../styles/utils/Confirm.module.css'

export const ConfirmContext = createContext()
export const useConfirm = () => useContext(ConfirmContext)

export const ConfirmProvider = ({ children }) => {
    const [confirmation, setConfirmation] = useState(false)
    const [showOptions, setShowOptions] = useState(false)

    return (
        <ConfirmContext.Provider
            value={{ confirmation, setConfirmation, showOptions, setShowOptions }}
        >
            {children}
        </ConfirmContext.Provider>
    )
}

export default function Confirm() {
    const { showOptions } = useConfirm()

    return <div>{showOptions && <ConfirmBox />}</div>
}

function ConfirmBox() {
    const { setConfirmation, setShowOptions } = useConfirm()

    function yes() {
        setShowOptions(false)
        setConfirmation(true)
    }

    function no() {
        setShowOptions(false)
        setConfirmation(false)
    }

    return (
        <div className={styles.relativeContainer}>
            <div className={styles.confirmBox}>
                <p>Hello</p>
                <div className={styles.options}>
                    <button className={styles.button} onClick={() => yes()}>
                        Confirm
                    </button>
                    <button className={styles.button} onClick={() => no()}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}
