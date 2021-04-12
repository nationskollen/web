import React from 'react'
import ActiveLink from './ActiveLink'
import styles from '../styles/Navbar.module.css'
import * as Icons from 'react-icons/hi'
import { NavLink } from 'react-router-dom'
import { Router } from 'next/router'

const Navbar = () => {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.nav}>
                <p className={styles.navTitle}>NationsKollen</p>
            </div>

                {/* TODO: Align icons with text */}

            <div className={styles.menuContainer}>
                <div className={styles.submenuContainer}>
                    <h1 className={styles.h1Style}>Dashboard</h1>
                    <div className="">
                        <div className={styles.menuItem}>
                            <Icons.HiTemplate className={styles.icon} />
                            <ActiveLink activeClassName={styles.active}  href="/">
                                <a className={styles.linkText}>Översikt</a>
                            </ActiveLink>
                            
                        </div>
                    </div>
                    <div className="">
                        <div className={styles.menuItem}>
                            <Icons.HiBell className={styles.icon}/>
                            <ActiveLink activeClassName={styles.active} href="/news">
                                <a className={styles.linkText}>Nyheter & meddelande</a>
                            </ActiveLink>
                        </div>
                    </div>
                   

                </div>
                <div className={styles.submenuContainer}>
                    <h1 className={styles.h1Style}>Aktivitet</h1>
                    <div className="">
                        <div className={styles.menuItem}>
                            <Icons.HiUserGroup className={styles.icon} />
                            <ActiveLink activeClassName={styles.active} href="/entrance">
                                <a className={styles.linkText}>Entré</a>
                            </ActiveLink>
                        </div>
                    </div>
                </div>

                <div className={styles.submenuContainer}>
                    <h1 className={styles.h1Style}>Redigera innehåll</h1>
                    <div className="">
                        <div className={styles.menuItem}>
                            <Icons.HiClock className={styles.icon} />
                            <ActiveLink activeClassName={styles.active} href="/businessHours">
                                <a className={styles.linkText}>Öppetider</a>
                            </ActiveLink>
                        </div>
                    </div>
                    <div className="">
                        <div className={styles.menuItem}>
                            <Icons.HiInformationCircle className={styles.icon} />
                            <ActiveLink activeClassName={styles.active} href="/nation">
                                <a className={styles.linkText}>Nationssida</a>
                            </ActiveLink>
                        </div>
                    </div>
                    <div className="">
                        <div className={styles.menuItem}>
                            <Icons.HiClipboardList className={styles.icon} />
                            <ActiveLink activeClassName={styles.active} href="/foodMenu">
                                <a className={styles.linkText}>Meny</a>
                            </ActiveLink>
                        </div>
                    </div>
                    <div className="">
                        <div className={styles.menuItem}>
                            <Icons.HiUserGroup className={styles.icon} />
                            <ActiveLink activeClassName={styles.active} href="/login">
                                <a className={styles.linkText}>Login</a>
                            </ActiveLink>
                        </div>
                    </div>
                </div>


                <div>

                </div>

            </div>
        </div>
        </>
    )
}

export default Navbar
