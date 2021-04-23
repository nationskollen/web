import React from "react";
import styles from "../styles/AddEvent.module.css";

function handleFormSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  const formJSON = Object.fromEntries(data.entries());
  // for multi-selects, we need special handling
  formJSON.snacks = data.getAll("snacks");
  const results = document.querySelector(".results pre");
  results.innerText = JSON.stringify(formJSON, null, 2);
}

var stripe_load = () => {
  if (process.browser) {
    const form = document.querySelector(".contact-form");
    form.addEventListener("submit", handleFormSubmit);
  }
};

const AddEvent = (props) => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.header}></div>
        {/* Start: */}
        <label className={styles.label} for="occurs_at">
          Start Time
          <input className={styles.input} type="datetime-local" />
        </label>
        {/* End: */}
        <label className={styles.label} for="ends_at">
          End Time
          <input className={styles.input} type="datetime-local" />
        </label>
        {/* Title: */}
        <label className={styles.label} for="name">
          Title
          <input className={styles.input} type="text" />
        </label>
        {/* Description: */}
        <label className={styles.label} for="description">
          Description
          <textarea
            rows="15"
            cols="60"
            className={styles.textarea}
            placeholder={"A quick description of the event"}
          ></textarea>
        </label>
        {/* Tags: */}
        <label className={styles.label}>
          Tags
          <input className={styles.input} type="text" />
        </label>
        {/* Locations: */}
        <label className={styles.label} for="location_id">
          Locations
          <input className={styles.input} type="search" />
        </label>
        {/* Type of event: */}
        <label className={styles.label}>
          Type of event
          <select className={styles.input} id="cars" name="cars">
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
          <input className={styles.input} type="checkbox" />
        </label>
        {/* Members only*/}
        <label className={styles.label}>
          Only members
          <input className={styles.input} type="checkbox" />
        </label>
        {/* Image header: */}
        <label className={styles.label} for="cover_img_src">
          Image header
          <input
            className={styles.input}
            type="file"
            id="myfile"
            name="myfile"
          />
        </label>
        <input name="id" type="hidden" value="2 "></input>

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
