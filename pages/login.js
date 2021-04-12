import Head from 'next/head'
import styles from '../styles/Login.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <img src="../img/Uppsala vector.svg" class={styles.background}></img> */}
      <div className={styles.background}></div>

      <div className={styles.header}>
        <p className={styles.headerText}>NATIONSKOLLEN</p>
      </div>

      <table className={styles.loginContainer}>
        <tr>
          <div className={styles.text}>EMAIL</div>
          <div className={styles.textPanel}></div>
        </tr>
        <tr>
          <div className={styles.text}>PASSWORD</div>
          <div className={styles.textPanel}>
            <div className={styles.text}>SHOW</div>
          </div>
        </tr>
        <tr>
          <div className={styles.loginPanel}>
            <div className={styles.loginButtonText}>LOGIN</div>
          </div>
        </tr>
      </table>
    </div>
  )
}