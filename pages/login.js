import React from 'react';
import { useState } from "react";
import Router from 'next/router'
import styles from '../styles/Login.module.css'
import { useLogin} from '@dsp-krabby/sdk'

export default function Home() {
  const login = useLogin({
    development: process.env.NODE_ENV === 'development',
    useWebSockets: false
  })
  console.log(login);
  console.log(useLogin);

  const [showError, displayError] = useState(false);
  const [shake, setShake] = useState('0');
  
  const [passwordType, setPasswordType] = useState("password");
  const togglePasswordVisibility = () => {
    console.log("Toggled password visibility");
    if (passwordType == "password") setPasswordType("text");
    else                            setPasswordType("password");
  };

  const submitLogin = () => {
    if (login.result) {
      console.log("Successful login");
      //Load main page
      Router.push("/");
    }
    else {
      console.log("Failed login");
      //Show error message
      setShake('1');
      displayError(true);
    }
  }

  const handleKeypress = e => {
    if (e.key === 'Enter') {
      submitLogin();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.background}></div>

      <div className={styles.header}>
        <p className={styles.headerText}>NATIONSKOLLEN</p>
      </div>

      <table className={styles.loginContainer}>
        <tr>
          <div className={styles.text}>EMAIL</div>
          <div className={styles.textPanel}>
            <input className={styles.inputPanel} onChange={event => login.setEmail(event.target.value)}></input>
          </div>
        </tr>
        <tr>
          <div className={styles.text}>PASSWORD</div>
          <div className={styles.textPanel}>
            <input className={styles.inputPanel} rows="1" type={passwordType}
              onChange={event => login.setPassword(event.target.value)}
              onKeyPress={handleKeypress}
            />
            <button className={styles.showButton} onClick={togglePasswordVisibility}>SHOW</button>
          </div>
        </tr>
        <tr>
          <button className={styles.loginPanel} onClick={submitLogin} type="submit">
            <div className={styles.loginButtonText}>LOGIN</div>
          </button>
        </tr>
      </table>
      { showError &&
        <div className={styles.errorMessage} onAnimationEnd={() => setShake('0')} shake={shake}>Your email or password is wrong!</div>
      }
    </div>
  )
}
