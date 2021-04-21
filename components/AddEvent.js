import React from "react";
import styles from "../styles/AddEvent.module.css";

const AddEvent = (props) => {
  return (
    //   TODO Fixa hela jälva formen
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.header}></div>
        <div className={styles.start}>
          {/* Start: */}
          <lable className={styles.lable}>Start Time</lable>
          <input type="datetime-local" className={styles.date} />
        </div>
        <div className={styles.start}>
          {/* End: */}
          <lable className={styles.lable}>End Time</lable>
          <input type="datetime-local" className={styles.date} />
        </div>
        <div className={styles.start}>
          {/* Title: */}
          <lable className={styles.lable}>Title </lable>
          <input type="text" className={styles.input} />
        </div>
        <div className={styles.start}>
          {/* Description: */}
          <lable className={styles.lable}>Description</lable>
          <textarea
            id="w3review"
            name="w3review"
            rows="15"
            cols="60"
            className={styles.textarea}
            placeholder={"A quick description of the event"}
          ></textarea>
        </div>
        <div className={styles.start}>
          {/* Tags: */}
          <lable className={styles.lable}>Tags</lable>
          <input type="text" className={styles.input} />
        </div>
        <div className={styles.start}>
          {/* Locations: */}
          <lable className={styles.lable}>Locations</lable>
          <input type="search" className={styles.input} />
        </div>
        <div className={styles.start}>
          {/* Locations: */}
          <lable className={styles.lable}>Type of event</lable>
          <select id="cars" name="cars" className={styles.input}>
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
        <div className={styles.start}>
          {/* Require Nationskort? */}
          <lable className={styles.lable}>Only students</lable>
          <input type="checkbox" />
        </div>
        <div className={styles.start}>
          {/* Require Nationskort? */}
          <lable className={styles.lable}>Only members</lable>
          <input type="checkbox" />
        </div>
        <div className={styles.start}>
          {/* Image header: */}
          <lable className={styles.lable}>Image header</lable>
          <input type="file" id="myfile" name="myfile" />
        </div>

        <input
          type="submit"
          value="Create Event"
          className={styles.input}
        ></input>
      </form>
    </div>
  );
};

export default AddEvent;
