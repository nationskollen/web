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

import styles from "../styles/News.module.css";
import container from "../styles/Container.module.css";
import "react-calendar/dist/Calendar.css";

export default function News() {
  return (
    <div>
      <div className={styles.container}>
        <Navbar />
        <Header />
        <div className={container.container}>
          <main>
	    <div className={styles.realContainer}>
	      <div className={styles.inputti}>
		<h1>Beskrivning</h1>
		<input
		    className={styles.titleText}
		    type="text"
		    placeholder="Titel"
		/>
		  <input
		      className={styles.contentText}
		      type="text"
		      placeholder="Beskrivning..."
		  />
		  <button
		      className={styles.submit}
		      onClick={() => console.log("tjo")}
		  >Publicera</button>
	      </div>
	      <div className={styles.inputti2}>

	      </div>
	    </div>
          </main>
        </div>
      </div>
    </div>
  );
}
