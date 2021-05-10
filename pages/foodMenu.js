import Head from 'next/head'
import Calendar from 'react-calendar'
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Chart from '../components/Chart'
import Main from '../components/Main'
import Header from '../components/Header'
import Rightbar from '../components/Rightbar'
import Addfood from '../components/AddFood'

import styles from '../styles/FoodMenu.module.css'
import container from '../styles/Container.module.css'
import calendar from '../styles/Calendar.module.css'
import PreviousPosts from '../components/PreviousPosts'

export default function FoodMenu() {
    const [value, onChange] = useState(new Date())

    return (
        <div>
            <div className={styles.container}>
                <Navbar />
                <Header />
                <div className={container.container}>
                    <main>
                        <div className={container.cards}>
                            <Card>Frukost</Card>
                            <Card>Lunch</Card>
                            <Card>Fika</Card>
                            <Card>Middag</Card>
                        </div>
                        <div className={container.main}>
                            <Main>
                                <Addfood></Addfood>
                            </Main>
                            <Rightbar>
                                <PreviousPosts></PreviousPosts>
                            </Rightbar>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}
