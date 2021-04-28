import React from "react";
import * as Icons from "react-icons/hi";

import styles from "../styles/Datatable.module.css";

export default function Datatable({ data }) {
  const columns = data[0] && Object.keys(data[0]);
  // var result = columns.filter((item) => !item.includes("id"));
  // console.log(result);

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
                <Icons.HiEye />
                <a href="/addevents">
                  <Icons.HiPencil />
                </a>
                <a href="">
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
