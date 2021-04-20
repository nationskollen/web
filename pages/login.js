import React from 'react';
import { useState } from "react";
import { Redirect } from "react-router-dom";
import Router from 'next/router'
import styles from '../styles/Login.module.css'

export default function Home() {
  const [passwordType, setPasswordType] = useState("password");
  const togglePasswordVisibility = () => {
    console.log("Toggled password visibility");
    if (passwordType == "password") setPasswordType("text");
    else  setPasswordType("password");
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
      //Show error message
      displayError(true);
    }
  }

  const [showError, displayError] = useState(false);
  const hideErrorMessage = () => {
    console.log("Hide error message");
    setErrorType(false);
  };

  const handleKeypress = e => {
    //it triggers by pressing the enter key
    if (e.key === 'Enter') {
      submitLogin();
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
            <input className={styles.inputPanel} onChange={event => setEmail(event.target.value)}></input>
          </div>
        </tr>
        <tr>
          <div className={styles.text}>PASSWORD</div>
          <div className={styles.textPanel}>
            <input className={styles.inputPanel} rows="1" type={passwordType} onChange={event => setPassword(event.target.value)} onKeyPress={handleKeypress}></input>
            <button className={styles.showButton} onClick={togglePasswordVisibility}>SHOW</button>
          </div>
        </tr>
        <tr>
          <button className={styles.loginPanel} onClick={submitLogin}>
            <div className={styles.loginButtonText}>LOGIN</div>
          </button>
        </tr>
      </table>
      { showError &&
            <div className={styles.errorMessage}>Your email or password is wrong!</div>
           }
    </div>
  )
}

//TODO: Replace this dummy function and connect to sdk
function validCredentials(email, password) {
  return email == "aria.assadi@gmail.com" && password == "KattenFahad123";
}
