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
  const [refresh, doRefresh] = useState(0);

  return (
    <div>
      <div className={styles.container}>
        <Navbar />

        <div className={styles.header}>
          <Header />
          <div className={container.container}>
            <div className={container.cards}></div>

            <div className={container.main}>
              <Main>
                <div className={styles.grid}>
                  <div className={styles.headerText}>Öppettider standard</div>
                  <DayHours day="Monday"    saveChanges={refresh}></DayHours>
                  <DayHours day="Tuesday"   saveChanges={refresh}></DayHours>
                  <DayHours day="Wednesday" saveChanges={refresh}></DayHours>
                  <DayHours day="Thurday"   saveChanges={refresh}></DayHours>
                  <DayHours day="Friday"    saveChanges={refresh}></DayHours>
                  <DayHours day="Saturday"  saveChanges={refresh}></DayHours>
                  <DayHours day="Sunday"    saveChanges={refresh}></DayHours>
                  <button className={styles.saveButton} onChange={() => doRefresh(refresh + 1)}>
                    <div>Spara ändringar</div>
                  </button>
                </div>
              </Main>
              <Rightbar>
                <Calendar />
              </Rightbar>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
