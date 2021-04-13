import Head from 'next/head'
import Navbar from '../components/Navbar'
import Container from '../components/Container'
import Header from '../components/Header'
import styles from '../styles/Entrence.module.css'

export default function Entrence() {
  return (
    <div>
      <div className={styles.container}>
        <Navbar/>

        <div className={styles.header}>
          <Header/>
          <Container/>
        </div>

      </div>
    </div>
  )
}
