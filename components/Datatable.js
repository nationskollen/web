import React from "react";
import * as Icons from "react-icons/hi";

import styles from "../styles/Datatable.module.css";

export default function Datatable({ data }) {
  console.log(data[0]);

  let fruits = ["id", "nation_id", "cover_img_src"];
  let words = [
    "mango",
    "desk",
    "phone",
    "banana",
    "airpods",
    6,
    "mouse",
    "strawberry",
    9,
    "raspberry",
    10,
  ];

  const columns = data[0] && Object.keys(data[0]);

  columns.forEach((word, index) => {
    if (fruits.indexOf(word) !== -1) {
      columns.pop()[index];
    }
  });
  console.log(columns);

  return (
    <table cellPadding={0} cellSpacing={0} className={styles.table}>
      <thead className={styles.thead}>
        <tr>
          <th className={styles.th}>select</th>

          {data[0] &&
            columns.map((heading) => <th className={styles.th}>{heading}</th>)}
          <th className={styles.th}>Actions</th>
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        {data.map((row) => (
          <tr>
            <td className={styles.td}>
              <input type="checkbox" />
            </td>
            {columns.map((columns) => (
              <td className={styles.td}>{row[columns]}</td>
            ))}
            <td className={styles.td}>
              <div className={styles.icons}>
                <a className={styles.icon}>
                  <Icons.HiEye />
                </a>
                <a className={styles.icon} href="/addevents">
                  <Icons.HiPencil />
                </a>
                <a className={styles.icon} href="">
                  <Icons.HiTrash />
                </a>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
