import React, { useState, useEffect } from 'react'
import Datatable from './Datatable'
import styles from '../styles/EventManager.module.css'

require('es6-promise').polyfill()
require('isomorphic-fetch')

const EventManager = (props) => {
    // const [data, setData] = useState([])
    const [query, setQ] = useState('')
    const [searchColumns, setSearchColumns] = useState(['description', 'name'])
    const filter = ['id', 'nation_id', 'cover_img_src']

    const { data } = props
    console.log(data)
    // useEffect(() => {
    //     fetch('./data.json')
    //         .then((response) => response.json())
    //         .then((json) => setData(json))
    // }, [])

    function search(rows) {
        console.log(rows)
        return rows.filter((row) =>
            searchColumns.some((column) => row[column].toString().toLowerCase().indexOf(query) > -1)
        )
    }

    const columns = data[0] && Object.keys(data[0])

    if (typeof columns !== 'undefined') {
        columns.forEach((word, index) => {
            if (filter.indexOf(word) !== -1) {
                columns.splice(index, 2)
            }
        })
    }

    return (
        <div>
            <div className={styles.searchContainer}>
                <input
                    className={styles.searchInput}
                    placeholder="Search"
                    type="text"
                    value={query}
                    onChange={(event) => setQ(event.target.value.toLowerCase())}
                />

                <ul className={styles.menu}>
                    <li className={styles.li}>
                        <a>Filters</a>
                        <ul>
                            {columns &&
                                columns.map((column) => (
                                    <lable>
                                        <input
                                            type="checkbox"
                                            checked={searchColumns.includes(column)}
                                            onChange={(event) => {
                                                const checked = searchColumns.includes(column)
                                                setSearchColumns((prev) =>
                                                    checked
                                                        ? prev.filter((sc) => sc !== column)
                                                        : [...prev, column]
                                                )
                                            }}
                                        />
                                        {column}
                                    </lable>
                                ))}
                        </ul>
                    </li>
                </ul>
            </div>
            <div>
                <Datatable data={search(data)} />
            </div>
        </div>
    )
}

export default EventManager
