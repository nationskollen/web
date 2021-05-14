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

import styles from '../styles/Entrence.module.css'
import container from '../styles/Container.module.css'
import 'react-calendar/dist/Calendar.css'
import EntrenceCounter from '../components/EntrenceCounter'
import ProgressBar from '../components/ProgressBar'

export default function Entrence() {
    let nationInfo = false
    if (typeof window !== 'undefined') {
        const { data } = useNation(parseInt(localStorage.getItem('oid')))
        data && (nationInfo = data)
    }
    return (
        <div>
            <div className={styles.container}>
                <Navbar data={nationInfo} />
                <Header data={nationInfo} />
                <div className={container.container}>
                    <main>
                        <div className={container.cards}></div>

                        <div className={container.main}>
                            <Main>
                                <EntrenceCounter></EntrenceCounter>
                            </Main>
                            <Rightbar>
                                <Calendar />
                            </Rightbar>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}
