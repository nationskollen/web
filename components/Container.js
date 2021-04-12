import React from 'react'
import styles from '../styles/Container.module.css'
import Card from './Card'
import Main from './Main'
import Chart from './Chart'

const Container = () => {
    return (
        <div className={styles.container} >
            <div className={styles.cards}>
            <Card><Chart/></Card>
                <Card title="Besökare" balance={409} color={"green"}/>
                <Card title="Sålda Enheter" balance={3000} color={"yellow"}/>
                <Card title="Antal medlemmar" balance={100} color={"red"}/>
                <Card title="Övrigt hihi" balance={339}/>
                

            </div>
            <div className={styles.main}>
                <Main />
            </div>
        </div>
    )
}

export default Container