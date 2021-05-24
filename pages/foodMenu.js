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
import Addfood from '../components/foodMenu/AddFood'

import styles from '../styles/FoodMenu.module.css'
import container from '../styles/Container.module.css'
import calendar from '../styles/Calendar.module.css'
import PreviousPosts from '../components/news/PreviousPosts'

export default function FoodMenu() {
    const [value, onChange] = useState(new Date())
    let nationInfo = false
    if (typeof window !== 'undefined') {
        const { data } = useNation(parseInt(localStorage.getItem('oid')))
        data && (nationInfo = data)
    }
    return (
        <div>
            <div className={styles.container}>
                <Navbar data={nationInfo}/>
                <Header data={nationInfo}/>
                <div className={container.container}>
                    <main>
                        <div className={container.cards}>
                            <Card color={'red'}>Frukost</Card>
                            <Card>Lunch</Card>
                            <Card>Fika</Card>
                            <Card>Middag</Card>
                        </div>
                        <div className={container.main}>
                            <Main>
                                <Addfood></Addfood>
                            </Main>
                            <Rightbar >
                            </Rightbar>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}
