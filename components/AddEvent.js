import React from "react";
import styles from "../styles/AddEvent.module.css";

function handleSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  const value = data.get("email");
  console.log({ value });
}

if (typeof window !== "undefined") {
  console.log("Error!");
  const form = document.querySelector("form");
} else {
  console.log("Error!");
}

const AddEvent = (props) => {
  return (
    <div className={styles.container}>
      <form className={styles.form} id="addEvent" action="">
        <div className={styles.header}></div>
        {/* Start: */}
        <label className={styles.label} htmlFor="occurs_at">
          Start Time
          <input
            id="occurs_at"
            className={styles.input}
            type="datetime-local"
          />
        </label>
        {/* End: */}
        <label className={styles.label} htmlFor="ends_at">
          End Time
          <input id="ends_at" className={styles.input} type="datetime-local" />
        </label>
        {/* Title: */}
        <label className={styles.label} htmlFor="name">
          Title
          <input id="name" className={styles.input} type="text" />
        </label>
        {/* Description: */}
        <label className={styles.label} for="description">
          Description
          <textarea
            id="description"
            rows="15"
            cols="60"
            className={styles.textarea}
            placeholder={"A quick description of the event"}
          ></textarea>
        </label>
        {/* Tags: */}
        <label className={styles.label}>
          Tags
          <input id="tags" className={styles.input} type="text" />
        </label>
        {/* Locations: */}
        <label className={styles.label} for="location_id">
          Locations
          <input id="location_id" className={styles.input} type="search" />
        </label>
        {/* Type of event: */}
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
        {/* Students only */}
        <label className={styles.label}>
          Only Students
          <input id="student" className={styles.input} type="checkbox" />
        </label>
        {/* Members only*/}
        <label className={styles.label}>
          Only members
          <input id="member" className={styles.input} type="checkbox" />
        </label>
        {/* Image header: */}
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
      </form>

      <div>
        <h2>Result</h2>
        <pre></pre>
      </div>
    </div>
  );
};

export default AddEvent;
