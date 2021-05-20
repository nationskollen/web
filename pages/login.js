import React from 'react'
import { useState, useEffect } from 'react'
import Router from 'next/router'
import styles from '../styles/Login.module.css'
import { useLogin } from '@nationskollen/sdk'

export default function Home() {
    const login = useLogin()
    const [shake, setShake] = useState('0')

    const [passwordType, setPasswordType] = useState('password')
    const togglePasswordVisibility = () => {
        console.log('Toggled password visibility')
        if (passwordType == 'password') setPasswordType('text')
        else setPasswordType('password')
    }

    const handleKeypress = (e) => {
        if (e.key === 'Enter') {
            login.execute()
        }
    }

    useEffect(() => {
        if (login.result) {
            console.log('Successful login')
            console.log(login.result)
            //const user = { user : login.result};
            //console.log(user)
            localStorage.setItem('oid', login.result.oid)
            localStorage.setItem('user', JSON.stringify(login.result))
            console.log(localStorage.getItem('oid'))
            console.log(localStorage.getItem('user'))
            //Load main page
            Router.push('/')
        }
    }, [login.result])

    useEffect(() => {
        if (login.error) {
            console.log('Failed login')
            //Show error message
            setShake('1')
        }
    }, [login.error])

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
                        <input
                            className={styles.inputPanel}
                            onChange={(event) => login.setEmail(event.target.value)}
                        ></input>
                    </div>
                </tr>
                <tr>
                    <div className={styles.text}>PASSWORD</div>
                    <div className={styles.textPanel}>
                        <input
                            className={styles.inputPanel}
                            rows="1"
                            type={passwordType}
                            onChange={(event) => login.setPassword(event.target.value)}
                            onKeyPress={handleKeypress}
                        />
                        <button className={styles.showButton} onClick={togglePasswordVisibility}>
                            SHOW
                        </button>
                    </div>
                </tr>
                <tr>
                    <button className={styles.loginPanel} onClick={login.execute} type="submit">
                        <div className={styles.loginButtonText}>LOGIN</div>
                    </button>
                </tr>
            </table>
            {login.error && (
                <div
                    className={styles.errorMessage}
                    onAnimationEnd={() => setShake('0')}
                    shake={shake}
                >
                    Your email or password is wrong!
                </div>
            )}
        </div>
    )
}
