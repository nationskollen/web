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
                <div className={styles.prevPostbox}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc consequat, tortor vel placerat viverra, risus ligula
                    eleifend magna, vel placerat orci elit non libero.
                    Pellentesque nulla velit, mattis non ex vel, mollis mollis
                    odio. Nunc condimentum vel sapien in venenatis. Cras
                    pharetra purus nec accumsan aliquet. Phasellus iaculis
                    dictum lorem ut suscipit. Sed molestie libero et orci
                    sodales, facilisis mollis tellus blandit. In hac habitasse
                    platea dictumst. Mauris consequat lorem auctor porttitor
                    auctor. Cras scelerisque laoreet mauris, euismod maximus est
                    maximus nec. Donec nec dictum arcu, ac rhoncus mauris.
                    Nullam vitae finibus sapien, in finibus metus. Cras ornare
                    id ligula sit amet suscipit. Sed lacus ligula, commodo id
                    nibh in, lacinia tristique urna. Mauris vehicula bibendum
                    leo ac scelerisque. Curabitur at est nec justo congue
                    mollis. Donec ac risus blandit orci varius venenatis non eu
                    quam. Sed sit amet suscipit turpis. Donec dignissim elit id
                    ultrices tincidunt. Nunc semper interdum lectus sed finibus.
                    Nam rutrum facilisis orci quis faucibus. Cras at efficitur
                    diam. Ut varius efficitur tortor sit amet varius. Nam
                    euismod nisl eu vulputate vestibulum. Praesent at suscipit
                    ante. Sed tellus metus, sollicitudin in ornare ut, semper
                    vel erat. Quisque et nulla at leo sollicitudin elementum.
                    Pellentesque semper ligula at diam ornare, at tincidunt
                    ligula condimentum. Nam sagittis dolor egestas massa porta
                    pellentesque sit amet ut lacus. Fusce non gravida lectus.
                    Proin imperdiet neque vitae eros accumsan dignissim.
                    Curabitur at libero massa. Curabitur nec fringilla sapien.
                    Suspendisse non molestie augue. Donec vel vulputate odio.
                    Suspendisse ullamcorper erat a tortor gravida, vel luctus
                    eros viverra. Nam varius velit sed lacus faucibus faucibus.
                    Maecenas vel urna lobortis, dictum felis at, ornare est.
                    Aenean mattis elementum nunc in laoreet. Morbi tempor, ipsum
                    non consequat posuere, mauris neque malesuada urna, quis
                    tempus diam sem nec arcu. Quisque id nibh posuere, tempor
                    dolor sit amet, pharetra risus. Sed lobortis nisl nec orci
                    mattis pretium. Phasellus mauris mi, finibus vitae est non,
                    congue volutpat leo. Pellentesque rutrum viverra fringilla.
                    Maecenas ex tortor, efficitur sit amet porttitor ac,
                    dignissim quis dui. Proin eu ultricies neque, nec feugiat
                    felis. Phasellus auctor ligula at rutrum gravida. Nam
                    consequat ante magna. Sed nunc justo, semper a efficitur
                    sed, molestie ut tortor. Morbi dapibus, odio id scelerisque
                    venenatis, urna odio pellentesque mauris, eu pulvinar risus
                    tellus vel quam. Aenean sit amet rhoncus metus. Curabitur
                    ante ligula, laoreet ut sapien laoreet, tempus tincidunt
                    orci. Mauris ac purus lacus. Cras mollis sed neque eget
                    hendrerit. Duis at magna nisi. Praesent sit amet tristique
                    neque. Vestibulum ullamcorper est et gravida tincidunt.
                    Aliquam sed ultrices lacus, id blandit mauris. Nulla
                    consectetur fermentum sem, in aliquet arcu. Ut fermentum est
                    a nulla lacinia condimentum. Suspendisse congue blandit enim
                    vitae feugiat. Proin consectetur, nulla sit amet blandit
                    elementum, sapien justo luctus odio, ac faucibus dui ligula
                    pellentesque mi. In neque urna, viverra at feugiat at,
                    mollis in sem. Praesent aliquet ut ante ut cursus. Integer
                    tempus tincidunt mi in tincidunt. Cras ipsum dui, placerat
                    in nulla vel, blandit bibendum nisl. Donec vel accumsan
                    nisi, a malesuada elit.{" "}
                  </p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
