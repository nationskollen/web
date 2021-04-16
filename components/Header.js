import React from 'react';
import styles from '../styles/Header.module.css'
import Router from 'next/router'
import { useRouter } from 'next/router'
import * as Icons from 'react-icons/hi'


const Header = () => {
    const logOut = () => {
        console.log("User logged out");
        //Load login page
        Router.push("/login");
    }

    const router = useRouter();

    return (
        <div className={styles.container}>
            <div className={styles.leftHeader}>

                {/* //TODO Active title from navbar */}
                <p className={styles.ptext}>{getDescription(router.asPath)}</p>
            </div>

            <div className={styles.leftHeader}>
                {/* //TODO Replace this icon with the nation logo */}
                <Icons.HiAcademicCap className={styles.icon}/>
                <p>Admin</p>
                <div className={styles.line}></div>
                <button className={styles.logOutButton} onClick={logOut}>
                    Logga ut
                </button>
            </div>
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