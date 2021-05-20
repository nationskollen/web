import Head from 'next/head'
import Calendar from 'react-calendar'
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { useNation, useCategories } from '@nationskollen/sdk'

import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Chart from '../components/Chart'
import Main from '../components/Main'
import Header from '../components/Header'
import Rightbar from '../components/Rightbar'
import AddEvent from '../components/AddEvent'

import styles from '../styles/Entrence.module.css'
import container from '../styles/Container.module.css'
import 'react-calendar/dist/Calendar.css'

export default function addevents() {
    let nationInfo = false
    let categoryInfo = false
    if (typeof window !== 'undefined') {
        const hihi = useNation(parseInt(localStorage.getItem('oid'))).data
        const { data } = useCategories();
        
        data && (categoryInfo = data)
        hihi && (nationInfo = hihi)
        console.log(data)
        console.log(hihi)
    }
    return (
        <div>
            <div className={styles.container}>
                <Navbar data={nationInfo} />

                <div className={styles.header}>
                    <Header data={nationInfo} />
                    <div className={container.container}>
                        <div className={container.cards}></div>

                        <div className={container.main}>
                            <Main title="Add Event">
                                {(nationInfo && categoryInfo) && <AddEvent data={nationInfo} categories={categoryInfo} />}
                            </Main>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
