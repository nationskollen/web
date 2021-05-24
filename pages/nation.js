import Head from 'next/head'
import Calendar from 'react-calendar'
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { useNation } from '@nationskollen/sdk'

import Navbar from '../components/structure/Navbar'
import Card from '../components/utils/Card'
import Chart from '../components/utils/Chart'
import Main from '../components/structure/Main'
import Header from '../components/structure/Header'
import Rightbar from '../components/structure/Rightbar'
import NationDesign from '../components/nation/NationDesign'

import styles from '../styles/nation/Nation.module.css'
import container from '../styles/structure/Container.module.css'
import 'react-calendar/dist/Calendar.css'

export default function Nation() {
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
                    <main>{nationInfo && <NationDesign data={nationInfo} />}</main>
                </div>
            </div>
        </div>
    )
}
