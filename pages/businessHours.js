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
import OpeningHoursDay from "../components/OpeningHoursDay"; 
import OpeningHoursDate from "../components/OpeningHoursDate"; 

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
                <div className={styles.gridContainer}>
                  <div className={styles.standard}>
                      <div className={styles.headerText}>Öppettider standard</div>
                      <OpeningHoursDay day="Monday"    saveChanges={save}></OpeningHoursDay>
                      <OpeningHoursDay day="Tuesday"   saveChanges={save}></OpeningHoursDay>
                      <OpeningHoursDay day="Wednesday" saveChanges={save}></OpeningHoursDay>
                      <OpeningHoursDay day="Thurday"   saveChanges={save}></OpeningHoursDay>
                      <OpeningHoursDay day="Friday"    saveChanges={save}></OpeningHoursDay>
                      <OpeningHoursDay day="Saturday"  saveChanges={save}></OpeningHoursDay>
                      <OpeningHoursDay day="Sunday"    saveChanges={save}></OpeningHoursDay>
                      <button className={styles.button} onClick={() => doSave(save + 1)}>
                        Spara ändringar
                      </button>
                    </div>
                    <div className={styles.addDeviating}>
                      <div className={styles.headerText}>Ny avvikande öppettid</div>
                      <OpeningHoursDate saveChanges={save}></OpeningHoursDate>
                      <button className={styles.button} onClick={() => doSave(save + 1)}>
                        Lägg till
                      </button>
                    </div>
                    <div className={styles.seeDeviating}>
                      <div className={styles.headerText}>Avvikande öppettider</div>
                      <OpeningHoursDate date="2021-04-30" saveChanges={save}></OpeningHoursDate>
                      <OpeningHoursDate date="2021-06-25" saveChanges={save}></OpeningHoursDate>
                      <OpeningHoursDate date="2021-06-26" saveChanges={save}></OpeningHoursDate>
                      <OpeningHoursDate date="2021-12-24" saveChanges={save}></OpeningHoursDate>
                      <OpeningHoursDate date="2021-12-25" saveChanges={save}></OpeningHoursDate>
                      <OpeningHoursDate date="2021-12-26" saveChanges={save}></OpeningHoursDate>
                      <OpeningHoursDate date="2021-12-31" saveChanges={save}></OpeningHoursDate>
                      <OpeningHoursDate date="2022-01-01" saveChanges={save}></OpeningHoursDate>
                      <OpeningHoursDate date="2021-04-30" saveChanges={save}></OpeningHoursDate>
                      <button className={styles.button} onClick={() => doSave(save + 1)}>
                        Spara ändringar
                      </button>
                    </div>
                </div>
              </Main>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
