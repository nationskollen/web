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
                >
                  Publicera
                </button>
              </div>
              <div className={styles.inputti2}>
                <h1>Tidigare meddelanden</h1>
                <div className={styles.prevPostsBox}>
		    

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu congue eros. Sed feugiat, neque vel tincidunt finibus, lorem urna ultrices dolor, imperdiet porttitor mauris enim vitae sem. Fusce finibus quis mi nec varius. Nam et condimentum mauris. In varius fringilla tempor. Vestibulum rutrum a purus molestie pharetra. Praesent sed enim fringilla, congue justo at, tempus orci.

Pellentesque interdum erat mi, nec cursus ex sollicitudin at. In ornare feugiat convallis. Fusce vel pharetra eros. Maecenas venenatis sem nec ipsum tristique, eu gravida orci posuere. In hac habitasse platea dictumst. Nulla vitae lacus a ipsum egestas bibendum. Aliquam aliquam in ex et feugiat. Quisque in eros id purus rutrum egestas. Duis tincidunt lacus diam, at maximus lorem mattis et. Donec nec venenatis metus. Curabitur nec orci risus.

Maecenas commodo porttitor felis sit amet eleifend. Mauris ultrices ligula at nulla mattis ornare. Suspendisse volutpat, mi ac suscipit placerat, neque purus dignissim massa, eget lacinia ligula dui nec nisl. Praesent ac suscipit ipsum. Ut tempus massa est, eget sagittis ligula cursus non. Integer aliquet nunc eu imperdiet pharetra. Pellentesque porttitor elit vitae odio suscipit, in tincidunt risus luctus. Nullam et tortor mauris. In ac sodales metus. Curabitur vulputate mauris vel lorem gravida, sit amet sollicitudin magna porttitor. Morbi vitae fringilla felis. Nulla sit amet lacus lorem. Proin auctor justo quis mauris rutrum, et elementum purus posuere.

Vestibulum porta pharetra nulla, et ultrices elit mollis sed. Pellentesque auctor nisl in erat cursus, eu rhoncus nisi semper. Phasellus quis tortor massa. Suspendisse est massa, tincidunt eget ipsum quis, volutpat venenatis felis. Vestibulum ac facilisis tellus. Sed id elit sit amet orci efficitur mollis porta a purus. Cras faucibus ac nibh et placerat. Nulla maximus ullamcorper posuere. Integer bibendum scelerisque neque vitae sagittis. Sed ex dui, laoreet sed velit quis, mattis accumsan velit. Nulla quis maximus ligula, nec fringilla diam. Praesent quis dignissim libero.

Ut nec lacinia augue, et vulputate lorem. Nulla facilisi. Suspendisse vitae mauris non mauris elementum auctor a sit amet turpis. Aenean scelerisque placerat libero id tincidunt. Integer iaculis diam sed urna egestas consequat. Donec ac ligula ornare, egestas urna sed, lobortis ligula. Proin laoreet urna vitae dolor luctus tempus. Suspendisse porta pretium mauris sed ornare. Sed ac velit fringilla, facilisis tortor eu, tincidunt sapien. Mauris ut turpis facilisis, congue lectus vitae, sagittis ante. Aliquam semper lobortis metus, ac tempor elit vulputate et. Cras mi elit, accumsan a sapien ut, commodo laoreet odio. 
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
