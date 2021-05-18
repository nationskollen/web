import Head from 'next/head'
import Calendar from 'react-calendar'
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Chart from '../components/Chart'
import LineChart from '../components/LineChart'
import Main from '../components/Main'
import Header from '../components/Header'
import Rightbar from '../components/Rightbar'

import styles from '../styles/Home.module.css'
import container from '../styles/Container.module.css'
import 'react-calendar/dist/Calendar.css'

export default function Home() {
    const [value, onChange] = useState(new Date())

    return (
        <div className={styles.container}>
            <Navbar />
            <Header />
            <div className={container.container}>
                <main>
                    <div className={container.cards}>
                        <Card>
                            <Chart
                                header={'Besökare'}
                                width={400}
                                height={200}
                                data={{
                                    labels: ['Medlemmar', 'Ickemedlemmar'],
                                    datasets: [
                                        {
                                            data: [300, 50],
                                            backgroundColor: ['#FF6384', '#36A2EB'],
                                            hoverBackgroundColor: ['#FF6384', '#36A2EB'],
                                        },
                                    ],
                                }}
                            />
                        </Card>
                        <Card>
                            <LineChart
                                header={'Besökare över tid'}
                                width={800}
                                height={400}
                                data={{
                                    labels: ['17.00', '18.00', '19.00', '20.00', '21.00'],
                                    datasets: [
                                        {
                                            label: 'Icke Medlemmar',
                                            fill: false,
                                            lineTension: 0.1,
                                            backgroundColor: '#FF6384',
                                            borderColor: '#FF6384',
                                            borderCapStyle: 'butt',
                                            borderDash: [],
                                            borderDashOffset: 0.0,
                                            borderJoinStyle: 'miter',
                                            pointBorderColor: '#FF6384',
                                            pointBackgroundColor: '#fff',
                                            pointBorderWidth: 1,
                                            pointHoverRadius: 5,
                                            pointHoverBackgroundColor: '#FF6384',
                                            pointHoverBorderColor: '#FF6384',
                                            pointHoverBorderWidth: 2,
                                            pointRadius: 1,
                                            pointHitRadius: 10,
                                            data: [65, 59, 80, 81, 56, 55, 40],
                                        },
                                        {
                                            label: 'Medlemmar',
                                            fill: false,
                                            lineTension: 0.1,
                                            backgroundColor: 'rgba(275,222,122,0.4)',
                                            borderColor: 'rgba(75,192,192,1)',
                                            borderCapStyle: 'butt',
                                            borderDash: [],
                                            borderDashOffset: 0.0,
                                            borderJoinStyle: 'miter',
                                            pointBorderColor: 'rgba(75,192,192,1)',
                                            pointBackgroundColor: '#fff',
                                            pointBorderWidth: 1,
                                            pointHoverRadius: 5,
                                            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                                            pointHoverBorderColor: 'rgba(20,20,20,1)',
                                            pointHoverBorderWidth: 2,
                                            pointRadius: 1,
                                            pointHitRadius: 10,
                                            data: [6, 5, 8, 8, 5, 5, 4],
                                        },
                                    ],
                                }}
                            />
                        </Card>
                    </div>

                    <div className={container.main}>
                        <Main />
                        <Rightbar>
                            <Calendar />
                        </Rightbar>
                    </div>
                </main>
            </div>
        </div>
    )
}
