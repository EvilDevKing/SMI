npm install react-table

import React, { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("smo_database.xlsx");
      const agents = await response.json();
      setData(agents);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  \{
    "header": [
     {
      "title": 1,
      "title": "data",
      "title": "data",
      "title": "data",
      "title": "data",
      "title": "data",
      "title": "data",

    },
    {
      "id": 2,
      "title": "data2",
      "title": "data2",
      "title": "data2",
      "title": "data2",
      "title": "data2",
      "title": "data2",
   ]
  }


  import React, { useMemo } from "react";
import { useTable } from "react-table";
import "./Table.css";

const Table = ({ data }) => {
  const columns = useMemo(
    () => [
      { Header: "title", accessor: "data" },
      { Header: "title", accessor: "data" },
      { Header: "title", accessor: "data" },
      { Header: "title", accessor: "emadatail" },
      { Header: "title", accessor: "data" },
      { Header: "title", accessor: "data" },
      { Header: "title", accessor: "data" },
      { Header: "title", accessor: "data" }
    ],
    []
  );


  // instance

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({ columns, data });

// render, again

  return (
    <div className="table-container">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );


  // sort by
  import { useTable, useSortBy } from "react-table";
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({ columns, data }, useSortBy);


// using excel data to create table

  <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>



// excel export

npm install sheetjs-style

npm install xlsx file-saver


import React from 'react';
import { saveAs } from 'file-saver';
import XLSX from 'xlsx';

const ExcelExport = ({ data, fileName }) => {
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'SMI Doc Download - date - xlsx');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], {type: 'application/smi-form'});
    saveAs(blob, `${fileName}.xlsx`);
  };


  //right-button
const ExcelExport = ({ data, fileName }) => {
    const exportToExcel = () => {
      const worksheet = csv.utils.json_to_sheet(data);
      const workbook = csv.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'SMI Doc Download - date - csv');
      const excelBuffer = csv.write(workbook, { bookType: 'csv', type: 'array' });
      const blob = new Blob([excelBuffer], {type: 'application/smi-form'});
      saveAs(blob, `${fileName}.csv`);
    };

  return (
    <button onClick={exportToExcel}>Export to CSV (.csv)</button>
  );
}

export default ExcelExport;

// more to export

import React from 'react';
import ExcelExport from './ExcelExport';

const data = [
  { id: 1, name: 'smi title', data: 00, data2: '000' },
  { id: 2, name: 'owner', data: 00, data2: '0000' }
];

const App = () => {
  return (
    <div>
      <h1>Export Data to Excel</h1>
      <ExcelExport data={data} fileName="import React from 'react';
import ExcelExport from './ExcelExport';

const data = [
  { id: 1, title1: 'data', title2: 01, title3: 'data2' },
  { id: 2, title1: 'data', title2: 02, title3: 'data2' }
];

const App = () => {
  return (
    <div>
      <h1>Export Data to Excel</h1>
      <ExcelExport data={data} fileName="SMI Doc Download - date" />
    </div>
  );
}

export default App;" />
    </div>
  );
}

export default App;


