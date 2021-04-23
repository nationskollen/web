import React from 'react';
import styles from '../styles/Header.module.css'
import Router from 'next/router'
import { useEffect } from "react";
import { useRouter } from 'next/router'
import * as Icons from 'react-icons/hi'
import { useLogout, useNation } from '@dsp-krabby/sdk'


const Header = () => {
    // User automatically gets oid 400 (Vdala nation)
    // TODO Replace this row to get oid from local storage
    const oid = 400;
    //const oid = localStorage.getItem('oid');
    const { data } = useNation(oid);
    const logout = useLogout();
    const router = useRouter();

    const logOut = () => {
        console.log("User logged out");
        logout.execute();
        localStorage.clear();
        //Load login page
        Router.push("/login");
    }

    return (
        <div className={styles.container}>
            <div className={styles.leftHeader}>

                {/* //TODO Active title from navbar */}
                <p className={styles.ptext}>{getDescription(router.asPath)}</p>
            </div>
            {data && (
                <div className={styles.leftHeader}>
                    {/* //TODO Replace this icon with the nation logo */}
                    <img src={data.icon_img_src} className={styles.icon}/>
                    <p>{data.name}</p>
                    <div className={styles.line}></div>
                    <button className={styles.logOutButton} onClick={logOut}>
                        Logga ut
                    </button>
                </div>
            )}
        </div>
    )
}

export default Header

function getDescription(path) {
    return descriptions[path];
}

var descriptions = {
    //TODO Add better descriptions
    "/":                "Välkommen till Nationskollens hemsida för admins",
    "/news":            "Hantera notifikationer och meddelanden till prenumeranter",
    "/entrance":        "Ändra antalet besökare på nationen i realtid",
    "/businessHours":   "Redigera nationens öppettider",
    "/nation":          "Redigera nationens information och beskrivning",
    "/foodMenu":        "Redigera restaurangens meny"
}