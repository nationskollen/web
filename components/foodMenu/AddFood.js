import React from 'react'
import styles from '../../styles/AddFood.module.css'

const AddFood = () => {
    return (
        <div>
            <div className={styles.container}>
                <h2 class="title">New menu Item</h2>
                <form>
                    <div id="item">
                        <span>Food item</span>
                        <input type="text" />
                    </div>
                    <div id="desc">
                        <span>Description</span>
                        <textarea rows="5"></textarea>
                    </div>
                    <div id="price">
                        <span>Price</span>
                        <input type="text" />
                    </div>
                    <div id="img_src">
                        <span>Image</span>
                        <input type="file" className={styles.custom_file_input} />
                    </div>

                    <div id="submit">
                        <span></span>
                    <input type="button" className={styles.submit} value="submit" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddFood
