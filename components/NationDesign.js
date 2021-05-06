import Head from 'next/head'
import Calendar from 'react-calendar'
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { useNation, useSDK, useUpload } from '@dsp-krabby/sdk'
import { useAsync, useAsyncCallback } from 'react-async-hook'

import styles from '../styles/NationDesign.module.css'
import CoverImage from './CoverImage'

export function NationDesign({ data }) { 

    const { api, user } = useSDK()
    const uploadCover = useUpload(api.nations.upload, [data.oid, 'cover'])
    const uploadIcon = useUpload(api.nations.upload, [data.oid, 'icon'])
    /// TODO: Change description and accent color
    //const updateDesc = useAsyncCallback( () => api.nations.update([data.oid, { description: description }] ) )
    //const updateAccent = useAsyncCallback( () => api.nations.update([data.oid, { accent_color: accent }] ) )

    const [ cover, setCover ] = useState(data.cover_img_src);
    const [ icon, setIcon ] = useState(data.icon_img_src);
    const [ description, setDescription ] = useState(data.description);
    const [ accent, setAccent ] = useState(data.accent_color);

    useEffect( () => {
	uploadIcon.result && setIcon(uploadIcon.result.icon_img_src)
    }, [uploadIcon.result])

    useEffect( () => {
	uploadCover.result && setCover(uploadCover.result.cover_img_src)
    }, [uploadCover.result])

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
			<button 
			    className={styles.button}
			    //onClick={updateDesc.execute()}
			>
			    Ändra
			</button>
		    </div>
		</div>
		    <textarea
			className={styles.descText}
			rows="10"
			placeholder="Beskriving..."
		    />

	    </div>

	    <div className={styles.nationPreview}>
		<h2>Preview</h2>
		<div className={styles.mockPhone}> 
		    <div style={{ backgroundColor: accent }} className={styles.statusBar}/>

		    <div style={{ backgroundColor: accent }} className={styles.backgroundImg}>
			<div style={{ backgroundImage: "url(" + cover + ")" }} className={styles.backColor}/>
			<div style={{ backgroundImage: 'url(' + icon + ')' }} className={styles.icon}/>
		    </div>

		    <div className={styles.description}>
			<div className={styles.nationName}>{data.name}</div>
			<div className={styles.descriptionText}>{description}</div>
		    </div>

		</div>
		<p className={styles.mockDescription}>OBS: Denna preview representerar endsast ungefär hur appen ser ut. Själva appen kan se annorlunda ut.</p> 
	    </div>
	</div>
    )
}

export default NationDesign;
