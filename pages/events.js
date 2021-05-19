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
        const { data } = useNation(parseInt(localStorage.getItem('oid')))
        const events = useEvents(parseInt(localStorage.getItem('oid'))).data
        data && (nationInfo = data)
        events && (nationEvents = events)
    }
    console.log(nationInfo)
    return (
        <div>
            <div className={styles.container}>
                <Navbar data={nationInfo} />
                <Header data={nationInfo} />
                <div className={container.container}>
                    <main>
                        <div className={container.main}>
                            <Main>{nationEvents && <EventManager data={nationEvents} />}</Main>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}
