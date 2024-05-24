import React from "react"
import "./style.scss"
import DataTable from "react-data-table-component"
import data from "./data"

const CreateReportPage = () => {

    const customStyles = {
        headCells: {
            style: {
                fontSize: 10,
                fontWeight: 'bold'
            },
        },
        cells: {
            style: {
                fontSize: 10
            },
        },
    };
    
    const columns = [
        {
            name: 'Number',
            selector: row => row.number,
            grow: 0
        },
        {
            name: 'Title',
            selector: row => row.title,
            grow: 2.5
        },
        {
            name: 'Originator',
            selector: row => row.origin,
            grow: 0
        },
        {
            name: 'Add Originator(s)',
            selector: row => row.origins
        },
        {
            name: 'Owner(s)',
            selector: row => row.owners,
            grow: 0
        },
        {
            name: 'Division',
            selector: row => row.division,
            grow: 0
        },
        {
            name: 'Department',
            selector: row => row.department,
            grow: 0
        },
        {
            name: 'Improvement Area',
            selector: row => row.area,
            grow: 0
        },
        {
            name: 'Description',
            selector: row => row.description,
            grow: 3
        }
    ];

    return (
        <div className="page-report">
            <p className="f-bold fs-20 fc-primary text-center">Report</p>
            <div className="d-flex flex-column">
                <p className="f-bold">Search Query:</p>
                <div className="dash-border">
                    <div className="d-flex fs-14">
                        <span className="f-bold">Field1:</span>
                        <span className="ml-10">Data</span>
                    </div>
                    <div className="d-flex fs-14">
                        <span className="f-bold">Field2:</span>
                        <span className="ml-10">Data</span>
                    </div>
                    <div className="d-flex fs-14">
                        <span className="f-bold">Field3:</span>
                        <span className="ml-10">Data</span>
                    </div>
                    <div className="d-flex fs-14">
                        <span className="f-bold">Field4:</span>
                        <span className="ml-10">Data</span>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column mt-30">
                <p className="f-bold">Search Result:</p>
                <DataTable
                    columns={columns}
                    data={data}
                    customStyles={customStyles}
                    responsive
                    pagination
                    paginationPerPage={30}
                    dense
                />
            </div>
            <div className="d-flex flex-column mt-20">
                <p className="w-100 text-center f-bold">Export Report from Search Results</p>
                <div className="d-flex justify-content-around mt-10">
                    <button type="button" className="export-btn">Export to CSV</button>
                    <button type="button" className="export-btn">Export to XLSX</button>
                </div>
            </div>
            <div className="d-flex justify-content-center mt-30">
                <button className="search-btn">REVISE SEARCH</button>
            </div>
        </div>
    )
}

export default CreateReportPage