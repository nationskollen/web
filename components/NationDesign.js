import Head from 'next/head'
import Calendar from 'react-calendar'
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { useNation, useSDK, useUpload } from '@dsp-krabby/sdk'

import styles from '../styles/NationDesign.module.css'
import CoverImage from './CoverImage'

export function NationDesign({ data }) { 

    const { api, user } = useSDK()
    const uploadCover = useUpload(api.nations.upload, [400, 'cover'])
    const uploadIcon = useUpload(api.nations.upload, [400, 'icon'])

    console.log(localStorage.getItem('oid'))

    const [ cover, setCover ] = useState(data.cover_img_src);
    const [ icon, setIcon ] = useState(null);
    const [ description, setDescription ] = useState(null);
    const [ accent, setAccent ] = useState(null);

    console.log(data.cover_img_src)
    console.log(cover)
    data && console.log(data)

    /// TODO: Refactoring
    return (
	<div className={styles.pageContainer}>
	    <div className={styles.nationOptions}>
		<h2>Configure design</h2>
		
		<div className={styles.choice}>
		    <p className={styles.text}>Byt ikon</p>
		    <div>
			<input
			    className={styles.input}
			    type="file"
			    onChange={uploadIcon.onFileChanged}
			/>
			<button 
			    className={styles.button}
			    onClick={uploadIcon.execute}
			>
			    Ladda upp
			</button>
		    </div>
		</div>

		<div className={styles.choice}>
		    <p className={styles.text}>Byt bakgrundsbild</p>
		    <div>
			<input
			    className={styles.input}
			    type="file"
			    onChange={uploadCover.onFileChanged}
			/>
			<button 
			    className={styles.button}
			    onClick={uploadCover.execute}
			>
			    Ladda upp
			</button>
		    </div>
		</div>

		<div className={styles.choice}>
		    <p className={styles.text}>Byt nationsfärg</p>
		    <div>
			<button 
			    className={styles.button}
			>
			    Välj färg
			</button>
		    </div>
		</div>
		
		<div className={styles.choice}>
		    <p className={styles.text}>Byt nationsinformation</p>
		    <div>
			<button className={styles.button}>
			    Ändra
			</button>
		    </div>
		</div>

	    </div>

	    <div className={styles.nationPreview}>
		<h2>Preview</h2>
		<div className={styles.mockPhone}> 
		    <div style={{ backgroundColor: data.accent_color }} className={styles.statusBar}/>

		    <div style={{ backgroundColor: data.accent_color }} className={styles.backgroundImg}>
			<div style={{ backgroundImage: "url(" + cover + ")" }} className={styles.backColor}/>
			<div style={{ backgroundImage: 'url(' + data.icon_img_src + ')' }} className={styles.icon}/>
		    </div>

		    <div className={styles.description}>
			<div className={styles.nationName}>{data.name}</div>
			<div className={styles.descriptionText}>{data.description}</div>
		    </div>

		</div>
		<p className={styles.mockDescription}>OBS: Denna preview representerar endsast ungefär hur appen ser ut. Själva appen kan se annorlunda ut.</p> 
	    </div>
	</div>
    )
}

export default NationDesign;
