import Head from 'next/head'
import Navbar from '../components/Navbar'
import Container from '../components/Container'
import Header from '../components/Header'
import styles from '../styles/News.module.css'

export default function News() {
  return (
    <div>
      <div className={styles.container}>
        <Navbar/>

        <div className={styles.header}>
          <Header/>
        </div>

      </div>
    </div>
  )
}
