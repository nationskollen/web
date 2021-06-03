import Head from 'next/head'
import styles from '@styles/Home.module.css'

const Home = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Nationskollen - Hem</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <p>Home</p>
            </main>
        </div>
    )
}

export default Home
