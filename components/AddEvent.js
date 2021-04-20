import React from "react";
import styles from "../styles/AddEvent.module.css";

const AddEvent = (props) => {
  return (
    //   TODO Fixa hela jälva formen
    <div className={styles.container}>
      <div className={styles.text}>
        <p className={styles.ptext}>Start:</p>
        <p className={styles.ptext}>End: </p>
        <p className={styles.ptext}>Title: </p>
        <p className={styles.pdesc}>Desription: </p>
        <p className={styles.ptext}>Tags: </p>
        <p className={styles.ptext}>Loactions: </p>
        <p className={styles.ptext}>Require Nationskort: </p>
        <p className={styles.ptext}>Image Header:</p>
      </div>
      <form className={styles.form}>
        <div className={styles.header}></div>
        <div className={styles.start}>
          {/* Start: */}
          <input type="datetime-local" className={styles.date} />
        </div>
        <div className={styles.start}>
          {/* End: */}
          <input type="datetime-local" className={styles.date} />
        </div>
        <div className={styles.start}>
          {/* Title: */}
          <input type="text" className={styles.input} />
        </div>
        <div className={styles.start}>
          {/* Description: */}
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
          <input type="text" className={styles.input} />
        </div>
        <div className={styles.start}>
          {/* Locations: */}
          <input type="search" className={styles.input} />
        </div>
        <div className={styles.start}>
          {/* Require Nationskort? */}
          <input type="checkbox" />
        </div>
        <div className={styles.start}>
          {/* Image header: */}
          <label for="myfile">Select a file:</label>
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
