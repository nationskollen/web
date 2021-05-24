import Head from 'next/head'
import Calendar from 'react-calendar'
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { useNation } from '@nationskollen/sdk'

import Navbar from '../components/structure/Navbar'
import Main from '../components/structure/Main'
import Header from '../components/structure/Header'
import Rightbar from '../components/structure/Rightbar'
import Confirm, { useConfirm, ConfirmProvider } from '../components/utils/Confirm'

import NewsDescription from '../components/news/NewsDescription'
import PreviousPosts from '../components/news/PreviousPosts'

import styles from '../styles/news/News.module.css'
import container from '../styles/structure/Container.module.css'
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
