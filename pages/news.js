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
import Confirm, { useConfirm, ConfirmProvider } from '../components/Confirm'

import NewsDescription from '../components/NewsDescription'
import PreviousPosts from '../components/PreviousPosts'

import styles from '../styles/News.module.css'
import container from '../styles/Container.module.css'
import 'react-calendar/dist/Calendar.css'

export default function News() {
    let nationInfo = false
    if (typeof window !== 'undefined') {
        const { data } = useNation(parseInt(localStorage.getItem('oid')))
        data && (nationInfo = data)
    }
    return (
        <ConfirmProvider>
            <div className={styles.container}>
                <Confirm />
                <Navbar data={nationInfo} />
                <Header data={nationInfo} />
                <div className={container.container}>
                    <main>
                        <div className={styles.realContainer}>
                            <NewsDescription />
                            <PreviousPosts />
                        </div>
                    </main>
                </div>
            </div>
        </ConfirmProvider>
    )
}
