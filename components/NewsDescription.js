
import Head from "next/head";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import styles from "../styles/NewsDescription.module.css";

export default function NewsDescription() {
    
    const [ description, setDescription ] = useState(null);
    const [ title, setTitle ] = useState("");
    const [ information, setInformation ] = useState("");
    const [ confirmation, setConfirmation ] = useState(false);

    function addDescription( title, information ) {
	setDescription({"title": title, "information": information});
	console.log(description);
    }

    useEffect( () => {
	// TODO: Upload to server

	console.log(description)
    }, [description])

    return (
        <div className={styles.inputBox}>
	    <h1>Beskrivning</h1>
            <input
                className={styles.titleText}
		type="text"
		placeholder="Titel"
		value={title}
		/* TODO: Change so that the value only changes when pressing a button? */
		onChange={event => setTitle(event.target.value)}
            />
            <input
		className={styles.contentText}
		type="text"
		placeholder="Beskrivning..."
		value={information}
		onChange={event => setInformation(event.target.value)}
            />
            <button
		className={styles.submit}
                onClick={() => setConfirmation(!confirmation)}
            >
		Publicera
	    </button>
	</div> 
    );
}

