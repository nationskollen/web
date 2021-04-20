import React, { useState, useEffect } from "react";

import Datatable from "./Datatable";

require("es6-promise").polyfill();
require("isomorphic-fetch");

const EventManager = () => {
  const [data, setData] = useState([]);
  const [q, setQ] = useState("");

  useEffect(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  function search(rows) {
    return rows.filter(
      (row) => row.name.toString().toLowerCase().indexOf(q) > -1
    );
  }

  return (
    <div>
      <div>
        <input type="text" value={q} onChange={(e) => setQ(e.target.value)} />
      </div>
      <div>
        <Datatable data={search(data)} />
      </div>
    </div>
  );
};

export default EventManager;
