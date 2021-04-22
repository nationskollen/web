import React from 'react'
import ActiveLink from './ActiveLink'
import styles from '../styles/Navbar.module.css'
import * as Icons from 'react-icons/hi'
import { NavLink } from 'react-router-dom'
import { Router } from 'next/router'
import { useNation } from '@dsp-krabby/sdk'

const Navbar = () => {
    const oid = localStorage.getItem('oid');
    const { data } = useNation(oid);

    return (
        <>
        <div className={styles.container}>
            <div className={styles.nav}>
                <p className={styles.navTitle}>Nationskollen</p>
            </div>

            <div className={styles.menuContainer}>
                <div className={styles.submenuContainer}>
                    <h1 className={styles.h1Style}>Dashboard</h1>
                    <div className="">
                        <div className={styles.menuItem}>
                            <ActiveLink activeClassName={styles.active}  href="/">
                                <a className={styles.linkText}>
                                    <Icons.HiTemplate className={styles.icon} />
                                    Översikt
                                </a>
                            </ActiveLink>
                            
                        </div>
                    </div>
                    <div className="">
                        <div className={styles.menuItem}>
                            
                            
                            <ActiveLink activeClassName={styles.active} href="/news">
                                <a className={styles.linkText}>
                                    <Icons.HiBell className={styles.icon}/>
                                    Nyheter & meddelande
                                </a>
                            </ActiveLink>
                        </div>
                    </div>
                   

                </div>
                <div className={styles.submenuContainer}>
                    <h1 className={styles.h1Style}>Aktivitet</h1>
                    <div className="">
                        <div className={styles.menuItem}>
                            <ActiveLink activeClassName={styles.active} href="/entrance">
                                <a className={styles.linkText}>
                                    <Icons.HiUserGroup className={styles.icon} />
                                    Entré
                                </a>
                            </ActiveLink>
                        </div>
                    </div>
                </div>

                <div className={styles.submenuContainer}>
                    <h1 className={styles.h1Style}>Redigera innehåll</h1>
                    <div className="">
                        <div className={styles.menuItem}>
                            <ActiveLink activeClassName={styles.active} href="/businessHours">
                                <a className={styles.linkText}>
                                    <Icons.HiClock className={styles.icon} />
                                    Öppetider
                                </a>
                            </ActiveLink>
                        </div>
                    </div>
                    <div className="">
                        <div className={styles.menuItem}>
                            <ActiveLink activeClassName={styles.active} href="/nation">
                                <a className={styles.linkText}>
                                    <Icons.HiInformationCircle className={styles.icon} />
                                    Nationssida
                                </a>
                            </ActiveLink>
                        </div>
                    </div>
                    <div className="">
                        <div className={styles.menuItem}>
                            <ActiveLink activeClassName={styles.active} href="/foodMenu">
                                <a className={styles.linkText}>
                                    <Icons.HiClipboardList className={styles.icon} />
                                    Meny
                                </a>
                            </ActiveLink>
                        </div>
                    </div>
                    <div className="">
                        <div className={styles.menuItem}>
                            <ActiveLink activeClassName={styles.active} href="/login">
                                <a className={styles.linkText}>
                                    <Icons.HiUserGroup className={styles.icon} />
                                    Login
                                </a>
                            </ActiveLink>
                        </div>
                    </div>
                </div>


                <div>

                </div>

            </div>
            {data &&
                <img src={data.icon_img_src} className={styles.logo}/>
            }
        </div>
        </>
    )
}

export default Navbar
