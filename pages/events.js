import Head from 'next/head'
import Calendar from 'react-calendar'
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

import { useEvents, useNation } from '@nationskollen/sdk'

import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Chart from '../components/Chart'
import Main from '../components/Main'
import Header from '../components/Header'
import Rightbar from '../components/Rightbar'
import EventManager from '../components/EventManager'

import styles from '../styles/Entrence.module.css'
import container from '../styles/Container.module.css'
import 'react-calendar/dist/Calendar.css'

export default function Entrence() {
    let nationInfo = false
    let nationEvents = false
    if (typeof window !== 'undefined') {
        const nationData = useNation(parseInt(localStorage.getItem('oid'))).data
        const { data } = useEvents(parseInt(localStorage.getItem('oid')))
        nationData && (nationInfo = nationData)
        data && (nationEvents = data)
    }
    return (
        <div>
            <div className={styles.container}>
                <Navbar data={nationInfo} />
                <Header data={nationInfo} />
                <div className={container.container}>
                    <main>
                        <div className={container.main}>
                            <Main>{(nationEvents && nationInfo) && <EventManager data={nationEvents} oid={nationInfo.oid}/>}</Main>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}
