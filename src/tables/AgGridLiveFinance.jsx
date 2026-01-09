import { useEffect, useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";

import { generateFinanceRow } from "../data/mockData";

function AgGridLiveFinance() {
    const [rowData, setRowData] = useState([]);
    const counterRef = useRef(1);

    const columnDefs = [
        { field: "time", headerName: "Time", width: 130 },
        {
            field: "price",
            headerName: "Price (₹)",
            valueFormatter: (p) => `₹${p.value}`,
        },
        {
            field: "trend",
            headerName: "Price Trend",
            cellRenderer: "agSparklineCellRenderer",
            cellRendererParams: {
                sparklineOptions: {
                    type: "line",
                    stroke: "#2563eb",
                    strokeWidth: 2,
                    highlightStyle: {
                        size: 4,
                        fill: "#2563eb",
                    },
                    marker: {
                        size: 0,
                    },
                },
            },
            width: 160,
        },
        {
            field: "change",
            headerName: "Change (₹)",
            cellStyle: (p) => ({
                color: p.value >= 0 ? "green" : "red",
                fontWeight: "bold",

            }),
        },
        {
            field: "status",
            headerName: "Trend",
            cellStyle: (p) => ({
                color: p.value === "UP" ? "green" : p.value === "DOWN" ? "red" : "gray",

            }),
        },


    ];
    const defaultColDef = {
        sortable: true,
        resizable: true,
    };
    useEffect(() => {
        const interval = setInterval(() => {
            setRowData((prevdata) => [
                generateFinanceRow(counterRef.current++),
                ...prevdata.slice(0, 19),
            ]);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ height: 400, width: "100%" }}>
            <AgGridReact
                rowData={rowData}
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                animateRows={true}
            />

        </div>
    );
};

export default AgGridLiveFinance;