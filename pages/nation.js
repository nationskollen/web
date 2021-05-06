import Head from 'next/head'
import Calendar from 'react-calendar'
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { useNation } from '@dsp-krabby/sdk'

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
    
    const { data, isValidating, mutate } = useNation(localStorage.getItem('oid'))
    return (
        <div>
            <div className={styles.container}>
                <Navbar />
                <Header />
                <div className={container.container}>
                    <main>
			{data && <NationDesign data={data}/>}
                    </main>
                </div>
            </div>
        </div>
    )
}
