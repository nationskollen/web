import Navbar from '../components/Navbar.js'
import styles from '../styles/Header.module.css'

const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.leftHeader}>
                <p className={styles.ptext}>BÖR STÅ VILKEN FLIK man är på</p>
            </div>

            <div className={styles.leftHeader}>
                {/* ICONS */}
                <p>Admin</p>
            </div>
        </div>
    )
}

export default Header
