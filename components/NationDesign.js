import Head from 'next/head'
import Calendar from 'react-calendar'
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { useNation } from '@dsp-krabby/sdk'

import styles from '../styles/NationDesign.module.css'
import CoverImage from './CoverImage'

export function NationDesign() {
    
    const { data, isValidating, mutate } = useNation(400)
    
    data && console.log(data)


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
		<div className={styles.mockPhone}>
		    <div className={styles.statusBar}>
		    </div>
		    <div className={styles.backgroundImg}>
			{data && (
			    <CoverImage 
				backgroundColor={data.accent_color}
				image={data.cover_img_src}
			    />
			)}
		    </div>
		    <div className={styles.icon}>
		    </div>
		    <div className={styles.description}>
		    </div>
		</div>
	    </div>
	</div>
    )
}

export default NationDesign;
