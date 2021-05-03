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
	    </div>
	    <div className={styles.nationPreview}>
		<h2>Preview</h2>
	    </div>
	</div>
    )
}

export default NationDesign;
