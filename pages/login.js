import Head from 'next/head'
import styles from '../styles/Login.module.css'

export default function Home() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.background}></div>

        <div className={styles.header}>
          <p className={styles.headerText}>NATIONSKOLLEN</p>
        </div>
      </div>
    </div>
  )
}