import React from "react";

import styles from "../styles/Datatable.module.css";

export default function Datatable({ data }) {
  const columns = data[0] && Object.keys(data[0]);
  return (
    <table cellPadding={0} cellSpacing={0} className={styles.table}>
      <thead className={styles.thead}>
        <tr>
          {data[0] &&
            columns.map((heading) => <th className={styles.th}>{heading}</th>)}
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        {data.map((row) => (
          <tr>
            {columns.map((columns) => (
              <td className={styles.td}>{row[columns]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
