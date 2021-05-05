import React from 'react'
import ProgressBar from './ProgressBar.js'
import styles from '../styles/EntrenceCounter.module.css'
import * as Icons from 'react-icons/hi'
import { useState } from 'react'

const EntrenceCounter = () => {
    const [member, setMember] = useState(0)
    const [nonMember, setNonMember] = useState(0)
    const [exit, setExit] = useState(0)
    const [current, setCurrent] = useState(0)
    const max = 43
    const [completed, setCompleted] = useState(0)

    const addMember = () => {
        setMember(member + 1)
        setCurrent(current + 1)
        setCompleted(Math.round((100 * current) / max))
    }

    const addNonMember = () => {
        setNonMember(nonMember + 1)
        setCurrent(current + 1)
        setCompleted(Math.round((100 * current) / max))
    }

    const addExit = () => {
        setExit(exit + 1)
        setCurrent(current - 1)
        setCompleted(Math.round((100 * current) / max))
    }

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.header}>Pubkväll 15 maj</div>
                <div className={styles.progressBar}>
                    <ProgressBar completed={completed}></ProgressBar>
                </div>
            </div>
            <div className={styles.middle1}>
                <div className={styles.buttonHeader}>Medlem</div>
                <div className={styles.buttonContainer}>
                    {/* TODO Fix hitbox of button so it is a circle */}
                    <Icons.HiPlusCircle
                        className={styles.icon}
                        onClick={() => addMember()}
                    ></Icons.HiPlusCircle>
                </div>
                <div className={styles.counter}>{member}</div>
            </div>
            <div className={styles.middle2}>
                <div className={styles.buttonHeader}>Ej medlem</div>
                <div className={styles.buttonContainer}>
                    <Icons.HiPlusCircle
                        className={styles.icon}
                        onClick={() => addNonMember()}
                    ></Icons.HiPlusCircle>
                </div>
                <div className={styles.counter}>{nonMember}</div>
            </div>
            <div className={styles.middle3}>
                <div className={styles.buttonHeader}>Utgång</div>
                <div className={styles.buttonContainer}>
                    <Icons.HiMinusCircle
                        className={styles.icon}
                        onClick={() => addExit()}
                    ></Icons.HiMinusCircle>
                </div>
                <div className={styles.counter}>{exit}</div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.bottomLeft}>
                    <p>Nuvarande antal</p>
                    <p>Maximal capacitet:</p>
                </div>
                <div className={styles.bottomRight}>
                    <p>{current}</p>
                    <p>{max}</p>
                </div>
            </div>
        </div>
    )
}

export default EntrenceCounter
