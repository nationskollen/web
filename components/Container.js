import React from 'react'
import styles from '../styles/Container.module.css'
import Card from './Card'
import Main from './Main'
import Chart from './Chart'

const Container = () => {
    return (
        <div className={styles.container} >
            <div className={styles.cards}>
                <Card>
                    <Chart header={'Besökare'} width={400} height={400}
                        data={{
                            labels:[
                                'Medlemmar',
                                'Ickemedlemmar'
                            ],
                            datasets:[{
                                data: [300, 50],
                                backgroundColor: [
                                    '#FF6384',
                                    '#36A2EB'
                                ],
                                hoverBackgroundColor: [
                                    '#FF6384',
                                    '#36A2EB'
                                ]  
                            }]
                        }}
                    />
                </Card>
                <Card>
                    <Chart header={'Försäljning'} width={400} height={400}
                        data={{
                            labels:[
                                'Öl',
                                'Öl2',
                                'Öl3',
                                'Öl4',
                                'Cider'
                            ],
                            datasets:[{
                                data: [300, 50, 10, 321, 12],
                                backgroundColor: [
                                    '#FF6384',
                                    '#F53384',
                                    '#F14384',
                                    '#FF3284',
                                    '#36A2EB'
                                ],
                                hoverBackgroundColor: [
                                    '#FF6384',
                                    '#FF6384',
                                    '#FF6384',
                                    '#FF6384',
                                    '#36A2EB'
                                ]  
                            }]
                        }}
                    />
                </Card>

                <Card>
                    <Chart header={'Försäljning'}/>
                </Card>

                {/* <Card title="Besökare" balance={409} color={"green"}/>
                <Card title="Sålda Enheter" balance={3000} color={"yellow"}/>
                <Card title="Antal medlemmar" balance={100} color={"red"}/>
                <Card title="Övrigt hihi" balance={339}/> */}
                

            </div>
            <div className={styles.main}>
                <Main />
            </div>
        </div>
    )
}

export default Container