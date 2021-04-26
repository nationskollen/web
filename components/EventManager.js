import React, { useState, useEffect } from "react";
import Datatable from "./Datatable";

require("es6-promise").polyfill();
require("isomorphic-fetch");

const EventManager = () => {
  const [data, setData] = useState([]);
  const [q, setQ] = useState("");
  const [searchColumns, setSearchColumns] = useState(["id", "name"]);

  useEffect(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  function search(rows) {
    return rows.filter(
      (row) =>
        searchColumns.some(
          (column) => row[column].toString().toLowerCase().indexOf(q) > -1
        )
      // Gammal filtrering
      // row.name.toString().toLowerCase().indexOf(q) > -1 ||
      // row.id.toString().toLowerCase().indexOf(q) > -1 ||
      // row.location_id.toString().toLowerCase().indexOf(q) > -1 ||
      // row.description.toString().toLowerCase().indexOf(q.toLowerCase()) > -1
    );
  }
  const columns = data[0] && Object.keys(data[0]);
  return (
    <div>
      <div>
        <input type="text" value={q} onChange={(e) => setQ(e.target.value)} />
        {columns &&
          columns.map((column) => (
            <lable>
              <input
                type="checkbox"
                checked={searchColumns.includes(column)}
                onChange={(e) => {
                  const checked = searchColumns.includes(column);
                  setSearchColumns((prev) =>
                    checked
                      ? prev.filter((sc) => sc !== column)
                      : [...prev, column]
                  );
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
  );
};

export default EventManager;
