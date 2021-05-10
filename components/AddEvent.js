import React from 'react'
import styles from '../styles/AddEvent.module.css'

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
            {/* <form className={styles.form} id="addEvent" action="">
                <div className={styles.header}></div>
                <label className={styles.label} htmlFor="occurs_at">
                    Start Time
                    <input id="occurs_at" className={styles.input} type="datetime-local" />
                </label>
                <label className={styles.label} htmlFor="ends_at">
                    End Time
                    <input id="ends_at" className={styles.input} type="datetime-local" />
                </label>
                <label className={styles.label} htmlFor="name">
                    Title
                    <input id="name" className={styles.input} type="text" />
                </label>
                <label className={styles.label} htmlFor="description">
                    Description
                    <textarea
                        id="description"
                        rows="15"
                        cols="60"
                        className={styles.textarea}
                        placeholder={'A quick description of the event'}
                    ></textarea>
                </label>
                <label className={styles.label}>
                    Tags
                    <input id="tags" className={styles.input} type="text" />
                </label>
                <label className={styles.label} htmlFor="location_id">
                    Locations
                    <input id="location_id" className={styles.input} type="search" />
                </label>
                <label className={styles.label}>
                    Type of event
                    <select className={styles.input} id="event">
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
                </label>
                <label className={styles.label}>
                    Only Students
                    <input id="student" className={styles.input} type="checkbox" />
                </label>
                <label className={styles.label}>
                    Only members
                    <input id="member" className={styles.input} type="checkbox" />
                </label>
                <label className={styles.label} htmlFor="cover_img_src">
                    Image header
                    <input className={styles.input} type="file" id="cover_img_src" />
                </label>
                <input id="id" name="id" type="hidden" value="2 "></input>

                <label className={styles.label}>
                    <input
                        className={styles.input}
                        className={styles.create}
                        type="submit"
                        value="Create Event"
                    ></input>
                </label>
            </form> */}

            <div className={styles.container}>
                <h2 class="title">Add Event</h2>
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
                        <input type="file" />
                    </div>

                    <input type="button" className={styles.submit} value="submit" />
                </form>
            </div>
        </div>
    )
}

export default AddEvent
