import React, { useState, useEffect } from 'react'
import Datatable from './Datatable'

require('es6-promise').polyfill()
require('isomorphic-fetch')

const EventManager = () => {
    const [data, setData] = useState([])
    const [query, setQ] = useState('')
    const [searchColumns, setSearchColumns] = useState(['id', 'name'])

    useEffect(() => {
        fetch('./data.json')
            .then((response) => response.json())
            .then((json) => setData(json))
    }, [])

    function search(rows) {
        return rows.filter(
            (row) =>
                searchColumns.some(
                    (column) => row[column].toString().toLowerCase().indexOf(query) > -1
                )
            // Gammal filtrering
            // row.name.toString().toLowerCase().indexOf(query) > -1 ||
            // row.id.toString().toLowerCase().indexOf(query) > -1 ||
            // row.location_id.toString().toLowerCase().indexOf(query) > -1 ||
            // row.description.toString().toLowerCase().indexOf(query.toLowerCase()) > -1
        )
    }
    const columns = data[0] && Object.keys(data[0])
    return (
        <div>
            <div>
                <input type="text" value={query} onChange={(event) => setQ(event.target.value)} />
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
            </div>
            <div>
                <Datatable data={search(data)} />
            </div>
        </div>
    )
}

export default EventManager
