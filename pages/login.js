import React from 'react';
import { useState } from "react";
import { Redirect } from "react-router-dom";
import Router from 'next/router'
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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitLogin = () => {
    if (validCredentials(email, password)) {
      console.log("Successful login");
      //Load main page
      Router.push("/");
    }
    else {
      console.log("Failed login");
    }
  }

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
            <input id={styles.inputEmail} onChange={event => setEmail(event.target.value)}></input>
          </div>
        </tr>
        <tr>
          <div className={styles.text}>PASSWORD</div>
          <div className={styles.textPanel}>
            <input id={styles.inputPassword} rows="1" type={type} onChange={event => setPassword(event.target.value)}></input>
            <button className={styles.showButton} onClick={togglePasswordVisibility}>SHOW</button>
          </div>
        </tr>
        <tr>
          <button className={styles.loginPanel} onClick={submitLogin}>
            <div className={styles.loginButtonText}>LOGIN</div>
          </button>
        </tr>
      </table>
    </div>
  )
}

//TODO: Replace this dummy function and connect to sdk
function validCredentials(email, password) {
  return email == "aria.assadi@gmail.com" && password == "KattenFahad123";
}