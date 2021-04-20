import React from "react";
import styles from "../styles/Main.module.css";
const Main = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p className={styles.titleText}>{props.title}</p>
      </div>
      <div className={styles.content}>
        <p></p>
      </div>
      {props.children}
    </div>
  );
};

export default Main;
