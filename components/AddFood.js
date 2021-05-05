import React from 'react'
import styles from '../styles/AddFood.module.css'

const AddFood = () => {
    return (
        <div>
            <div className={styles.container}>
                <h2 class="title">New menu Item</h2>
                <form>
                    <div id="fname">
                        <span>Food item</span>
                        <input type="text" />
                    </div>
                    <div id="address">
                        <span>Description</span>
                        <textarea rows="5"></textarea>
                    </div>
                    <div id="lname">
                        <span>Price</span>
                        <input type="text" />
                    </div>
                    <div id="nname">
                        <span>Image</span>
                        <input type="text" />
                    </div>

                    <input type="button" className={styles.submit} value="submit" />
                </form>
            </div>
        </div>
    )
}

export default AddFood
