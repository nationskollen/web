import Head from 'next/head'
import Calendar from 'react-calendar'
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { useNation } from '@nationskollen/sdk'

import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Chart from '../components/Chart'
import Main from '../components/Main'
import Header from '../components/Header'
import Rightbar from '../components/Rightbar'
import NationDesign from '../components/NationDesign'

import styles from '../styles/Nation.module.css'
import container from '../styles/Container.module.css'
import 'react-calendar/dist/Calendar.css'

export default function Nation() {
    /*let oid;
    useEffect( () => {
        oid = parseInt(localStorage.getItem('oid'))
    }, [])
    const { data } = useNation(oid)
    */
    if (typeof window !== 'undefined') {
        const oid = parseInt(localStorage.getItem('oid'))
        const { data } = useNation(oid)
        return (
        <div>
            <div className={styles.container}>
                <Navbar />
                <Header />
                <div className={container.container}>
                    <main>{data && <NationDesign data={data} />}</main>
                </div>
            </div>
        </div>
    )
    }

    return (
        <div>
            <div className={styles.container}>
                <Navbar />
                <Header />
                <div className={container.container}>
                </div>
            </div>
        </div>
    )
}
