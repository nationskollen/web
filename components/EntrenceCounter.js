import React from 'react';
import ProgressBar from './ProgressBar.js'
import styles from '../styles/EntrenceCounter.module.css'
import * as Icons from 'react-icons/hi'

const EntrenceCounter = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.header}>Pubkväll 15 maj</div>
                <div className={styles.progressBar}>
                    <ProgressBar completed="45"></ProgressBar>
                </div>
            </div>
            <div className={styles.middle1}>
                <div className={styles.buttonHeader}>Medlem</div>
                <button className={styles.button}>
                    <Icons.HiPlusCircle className={styles.icon}/>
                </button>
                <div className ={styles.counter}>34</div>
            </div>
            <div className={styles.middle2}>
                <div className={styles.buttonHeader}>Ej medlem</div>
                <button className={styles.button}>
                    <Icons.HiPlusCircle className={styles.icon}/>
                </button>
                <div className ={styles.counter}>47</div>
            </div>
            <div className={styles.middle3}>
                <div className={styles.buttonHeader}>Utgång</div>
                <button className={styles.button}>
                    <Icons.HiMinusCircle className={styles.icon}/>
                </button>
                <div className ={styles.counter}>60</div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.bottomLeft}>
                    <p>Nuvarande antal</p>
                    <p>Maximal capacitet:</p>
                </div>
                <div className={styles.bottomRight}>
                    <p>21</p>
                    <p>43</p>
                </div>
            </div>
        </div>
    );
};

export default EntrenceCounter;