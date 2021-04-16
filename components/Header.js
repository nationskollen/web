import React from 'react';
import styles from '../styles/Header.module.css'
import Router from 'next/router'
import * as Icons from 'react-icons/hi'


const Header = () => {
    const logOut = () => {
        console.log("User logged out");
        //Load login page
        Router.push("/login");
    }

    var currentPath = () => {
        if (window.location.pathname) return window.location.pathname;
        return "/";
    }

    return (
        <div className={styles.container}>
            <div className={styles.leftHeader}>

                {/* //TODO Active title from navbar */}

                {/* DOESNT WORK FOR CARL >:( */}
                <p className={styles.ptext}>{getDescription(currentPath())}</p>
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