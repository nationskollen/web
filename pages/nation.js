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

import styles from "../styles/Nation.module.css";
import container from "../styles/Container.module.css";
import "react-calendar/dist/Calendar.css";

export default function Nation() {
  return (
    <div>
      <div className={styles.container}>
        <Navbar />
        <Header />
        <div className={container.container}>
          <main>
            <div className={container.cards}></div>

            <div className={container.main}>
              <Main />
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
