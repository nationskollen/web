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

import styles from "../styles/Home.module.css";
import container from "../styles/Container.module.css";
import "react-calendar/dist/Calendar.css";

export default function Home() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <div className={styles.container}>
        <Navbar />

        <div className={styles.header}>
          <Header />
          <div className={container.container}>
            <div className={container.cards}>
              <Card>
                <Chart
                  header={"Besökare"}
                  width={400}
                  height={400}
                  data={{
                    labels: ["Medlemmar", "Ickemedlemmar"],
                    datasets: [
                      {
                        data: [300, 50],
                        backgroundColor: ["#FF6384", "#36A2EB"],
                        hoverBackgroundColor: ["#FF6384", "#36A2EB"],
                      },
                    ],
                  }}
                />
              </Card>
              <Card>
                <Chart
                  header={"Försäljning"}
                  width={400}
                  height={400}
                  data={{
                    labels: ["Öl", "Öl2", "Öl3", "Öl4", "Cider"],
                    datasets: [
                      {
                        data: [300, 50, 10, 321, 12],
                        backgroundColor: [
                          "#FF6384",
                          "#F53384",
                          "#F14384",
                          "#FF3284",
                          "#36A2EB",
                        ],
                        hoverBackgroundColor: [
                          "#FF6384",
                          "#FF6384",
                          "#FF6384",
                          "#FF6384",
                          "#36A2EB",
                        ],
                      },
                    ],
                  }}
                />
              </Card>
              <Card>
                <Chart
                  header={"Försäljning"}
                  width={400}
                  height={400}
                  data={{
                    labels: ["Öl", "Öl2", "Öl3", "Öl4", "Cider"],
                    datasets: [
                      {
                        data: [300, 50, 10, 321, 12],
                        backgroundColor: [
                          "#FF6384",
                          "#F53384",
                          "#F14384",
                          "#FF3284",
                          "#36A2EB",
                        ],
                        hoverBackgroundColor: [
                          "#FF6384",
                          "#FF6384",
                          "#FF6384",
                          "#FF6384",
                          "#36A2EB",
                        ],
                      },
                    ],
                  }}
                />
              </Card>
              <Card>
                <Chart
                  header={"Försäljning"}
                  width={400}
                  height={400}
                  data={{
                    labels: ["Öl", "Öl2", "Öl3", "Öl4", "Cider"],
                    datasets: [
                      {
                        data: [300, 50, 10, 321, 12],
                        backgroundColor: [
                          "#FF6384",
                          "#F53384",
                          "#F14384",
                          "#FF3284",
                          "#36A2EB",
                        ],
                        hoverBackgroundColor: [
                          "#FF6384",
                          "#FF6384",
                          "#FF6384",
                          "#FF6384",
                          "#36A2EB",
                        ],
                      },
                    ],
                  }}
                />
              </Card>
            </div>

            <div className={container.main}>
              <Main />

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
