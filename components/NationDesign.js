import Head from 'next/head'
import Calendar from 'react-calendar'
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

import styles from '../styles/NationDesign.module.css'

export function NationDesign() {

    return (
	<div className={styles.pageContainer}>
	    <div className={styles.nationOptions}>
		<h2>Configure design</h2>
		<div className={styles.choice}>
		    <p className={styles.text}>Byt ikon</p>
		    <button className={styles.button}>
			Ladda upp
		    </button>
		</div>
		<div className={styles.choice}>
		    <p className={styles.text}>Byt bakgrundsbild</p>
		    <button 
			className={styles.button}	
		    >
			Ladda upp
		    </button>
		</div>
		<div className={styles.choice}>
		    <p className={styles.text}>Byt nationsfärg</p>
		    <button className={styles.button}>
			Välj färg
		    </button>
		</div>
		<div className={styles.choice}>
		    <p className={styles.text}>Byt nationsinformation</p>
		    <button className={styles.button}>
			Ändra
		    </button>
		</div>
	    </div>
	    <div className={styles.nationPreview}>
		<h2>Preview</h2>
	    </div>
	</div>
    )
}

export default NationDesign;
