import Navbar from '../components/Navbar.js'
import styles from '../styles/Header.module.css'
import * as Icons from 'react-icons/hi'


const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.leftHeader}>

                {/* //TODO Active title from navbar */}

                <p className={styles.ptext}>BÖR STÅ VILKEN FLIK man är på</p>
            </div>

            <div className={styles.leftHeader}>
                <Icons.HiAcademicCap className={styles.icon}/>
                <p>Admin</p>
                <Icons.HiChevronDown className={styles.icon}/>
            </div>
        </div>
    )
}

export default Header
