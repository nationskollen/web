import React, { useState, useEffect } from 'react'
import Datatable from './Datatable'
import styles from '../styles/EventManager.module.css'
import { useEvents } from '@nationskollen/sdk'

import Confirm, { ConfirmProvider } from './Confirm'

require('es6-promise').polyfill()
require('isomorphic-fetch')

const EventManager = (props) => {
    const [query, setQ] = useState('')
    const [searchColumns, setSearchColumns] = useState(['short_description', 'name'])
    const columns = ['name', 'short_description', 'occurs_at', 'ends_at']

    const { oid } = props

    const allt = useEvents(oid)
    const data = allt.data
    const mutate = allt.mutate
    console.log(allt)

    function search(rows) {
        return rows.filter((row) =>
            searchColumns.some((column) => row[column].toString().toLowerCase().indexOf(query) > -1)
        )
    }

    return (
        <ConfirmProvider>
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
                <Datatable data={search(data)} mutate={mutate} oid={oid} />
            </div>
            <Confirm />
        </div>
        
        </ConfirmProvider>
    )
}

export default EventManager
