import Head from 'next/head'
import styles from '../styles/Login.module.css'

export default function Home() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.background}></div>

        <div className={styles.header}>NATIONSKOLLEN</div>
      </div>
    </div>
  )
}