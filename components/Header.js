import Navbar from '../components/Navbar.js'
import styles from '../styles/Header.module.css'
import Router from 'next/router'
import * as Icons from 'react-icons/hi'


const Header = () => {
    const logOut = () => {
        console.log("User logged out");
        //Load login page
        Router.push("/login");
    }

    return (
        <div className={styles.container}>
            <div className={styles.leftHeader}>

                {/* //TODO Active title from navbar */}

                <p className={styles.ptext}>BÖR STÅ VILKEN FLIK man är på</p>
            </div>

            <div className={styles.leftHeader}>
                {/* //TODO Replace this icon with nation logo */}
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
