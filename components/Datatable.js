import React from "react";

import styles from "../styles/Datatable.module.css";

export default function Datatable({ data }) {
  const columns = data[0] && Object.keys(data[0]);
  const info = "hej";
  return (
    <table cellPadding={0} cellSpacing={0} className={styles.table}>
      <thead className={styles.thead}>
        <tr>
          {data[0] &&
            columns.map((heading) => <th className={styles.th}>{heading}</th>)}
          <th className={styles.th}>Hej</th>
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        {data.map((row) => (
          <tr>
            {columns.map((columns) => (
              <td className={styles.td}>{row[columns]}</td>
            ))}
            <td className={styles.td}>{info}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
