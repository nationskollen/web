import React from 'react'
import styles from '../styles/AddFood.module.css'

const AddFood = (props) => {
    return (
        <div>
            <form className={styles.form} id="addFood">
                <div className={styles.header}></div>
                {/* Title: */}
                <label className={styles.label}>
                    Title
                    <input id="occurs_at" className={styles.input} type="text" />
                </label>
                {/* Description: */}
                <label className={styles.label}>
                    Description
                    <input id="ends_at" className={styles.input} type="text" />
                </label>
                <label className={styles.label}>
                    Price
                    <input className={styles.input} type="number" />
                </label>
                <label className={styles.label}>
                    Image header
                    <input className={styles.input} type="file" id="cover_img_src" />
                </label>
            </form>
        </div>
    )
}

export default AddFood
