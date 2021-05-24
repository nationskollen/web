import React from 'react'
import styles from '../../styles/AddEvent.module.css'

function handleSubmit(event) {
    event.preventDefault()
    const data = new FormData(event.target)
    const value = data.get('email')
    console.log({ value })
}

if (typeof window !== 'undefined') {
    console.log('pls not Error!')
    const form = document.querySelector('form')
} else {
    console.log('Error!')
}

const AddEvent = (props) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}> Add Event</h2>
            <form>
                <div id="fname">
                    <span>Start Time</span>
                    <input type="datetime-local" />
                </div>
                <div id="fname">
                    <span>End Time</span>
                    <input type="datetime-local" />
                </div>
                <div id="lname">
                    <span>Title</span>
                    <input type="text" />
                </div>
                <div id="address">
                    <span>Description</span>
                    <textarea rows="5"></textarea>
                </div>
                <div id="lname">
                    <span>Tags</span>
                    <input type="text" />
                </div>
                <div id="lname">
                    <span>Location</span>
                    <input type="text" />
                </div>
                <div id="lname">
                    <span>Type of event</span>
                    <select id="event">
                        <option value="Frukost">Frukost</option>
                        <option value="Brunch">Brunch</option>
                        <option value="Fika">Fika</option>
                        <option value="Sport">Sport</option>
                        <option value="Restaurang">Restaurang</option>
                        <option value="Pub">Pub</option>
                        <option value="Kultur">Kultur</option>
                        <option value="Gasque">Gasque</option>
                        <option value="Släpp">Släpp</option>
                        <option value="Klubb">Klubb</option>
                        <option value="Konsert">Konsert</option>
                        <option value="Övrigt">Övrigt</option>
                    </select>
                </div>
                <div id="lname">
                    <span>Only Students</span>
                    <input type="checkbox" />
                </div>
                <div id="lname">
                    <span>Only members</span>
                    <input type="checkbox" />
                </div>

                <div id="nname">
                    <span>Image</span>
                    <input type="file" className={styles.custom_file_input} />
                </div>
                <div id="submit">
                    <span></span>
                <input type="button" className={styles.submit} value="submit" />
                </div>
            </form>
        </div>
    )
}

export default AddEvent
