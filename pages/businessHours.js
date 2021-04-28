import Head from "next/head";
import Calendar from "react-calendar";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Chart from "../components/Chart";
import Main from "../components/Main";
import Header from "../components/Header";
import Rightbar from "../components/Rightbar";
import DayHours from "../components/DayHours"; 

import styles from "../styles/BusinessHours.module.css";
import container from "../styles/Container.module.css";
import "react-calendar/dist/Calendar.css";

export default function BusinessHours() {
  const [save, doSave] = useState('0');

  return (
    <div>
      <div className={styles.container}>
        <Navbar />
        <Header />
        <div className={container.container}>
          <main>
            <div className={container.cards}></div>

            <div className={container.main}>
              <Main>
               <div className={styles.standard}>
                  <div className={styles.headerText}>Öppettider standard</div>
                  <DayHours day="Monday"    saveChanges={save}></DayHours>
                  <DayHours day="Tuesday"   saveChanges={save}></DayHours>
                  <DayHours day="Wednesday" saveChanges={save}></DayHours>
                  <DayHours day="Thurday"   saveChanges={save}></DayHours>
                  <DayHours day="Friday"    saveChanges={save}></DayHours>
                  <DayHours day="Saturday"  saveChanges={save}></DayHours>
                  <DayHours day="Sunday"    saveChanges={save}></DayHours>
                  <button className={styles.button} onClick={() => doSave(save + 1)}>
                    <div>Spara ändringar</div>
                  </button>
                </div>
                <div className={styles.addDeviating}>
                  <div className={styles.headerText}>Ny avvikande öppettid</div>
                  <DayHours day="Date"      saveChanges={save}></DayHours>
                  <button className={styles.button} onClick={() => doSave(save + 1)}>
                    <div>Lägg till</div>
                  </button>
                </div>
              </Main>
              <Rightbar>
                <Calendar />
              </Rightbar>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
