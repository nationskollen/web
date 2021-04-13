import Head from 'next/head'
import React, { useState } from "react";
import styles from '../styles/Login.module.css'

export default function Home() {
  const [type, setType] = useState("password");
  const togglePasswordVisibility = () => {
    console.log("Toggled password visibility");
    if (type == "password") {
      setType("text");
    }
    else {
      setType("password");
    }
  };

  return (
    <div className={styles.container}>
      {/* <img src="../img/Uppsala vector.svg" class={styles.background}></img> */}
      <div className={styles.background}></div>

      <div className={styles.header}>
        <p className={styles.headerText}>NATIONSKOLLEN</p>
      </div>

      <table className={styles.loginContainer}>
        <tr>
          <div className={styles.text}>EMAIL</div>
          <div className={styles.textPanel}>
            <input id={styles.inputEmail}></input>
          </div>
        </tr>
        <tr>
          <div className={styles.text}>PASSWORD</div>
          <div className={styles.textPanel}>
            <input id={styles.inputPassword} rows="1" type={type}></input>
            <button className={styles.showButton} onClick={togglePasswordVisibility}>SHOW</button>
          </div>
        </tr>
        <tr>
          <div className={styles.loginPanel}>
            <div className={styles.loginButtonText}>LOGIN</div>
          </div>
        </tr>
      </table>
    </div>
  )
}

function loginButton() {
  var email     = document.getElementById(style.inputEmail);
  var password  = document.getElementById(style.inputPassword);
  if(validCredentials()) {
    true;
  }
  else {
    true;
  }
}
