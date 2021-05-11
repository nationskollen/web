import React from 'react'
import * as Icons from 'react-icons/hi'

import styles from '../styles/Datatable.module.css'

var translation = {
    //TODO Add better descriptions
    name: 'Name',
    description: 'Description',
    location_id: 'Location',
    occurs_at: 'Start Time',
    ends_at: 'End Time',
}

function translate(word) {
    return translation[word]
}

export default function Datatable({ data }) {
    const filter = ['id', 'nation_id', 'cover_img_src']
    let columns = data[0] && Object.keys(data[0])
    console.log(typeof columns)
    console.log(columns)

    if (typeof columns !== 'undefined') {
        columns.forEach((word, index) => {
            if (filter.indexOf(word) !== -1) {
                columns.splice(index, 2)
            }
        })
    }

    console.log(columns)

    return (
        <table cellPadding={0} cellSpacing={0} className={styles.table}>
            <thead className={styles.thead}>
                <tr className={styles.tr}>
                    <th className={styles.th}>Select</th>
                    {data[0] &&
                        columns.map((heading) => (
                            <th className={styles.th}>{translate(heading)}</th>
                        ))}
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
    )
}
