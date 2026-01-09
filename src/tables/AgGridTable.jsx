import { AgGridReact} from "ag-grid-react";
import { usersTableData } from "../data/mockdata";

function AgGridTable() {

    const columnDefs = [
        { field: "id", headerName:"ID", width:80 },
        { field: "name", headerName:"Name", filter:true },
        {field: "role", headerName:"Role", filter:true },
        {field :"department", headerName:"Department", filter:true },
        {
            field: "status",
            filter:true,
            cellStyle:params => ({
                color: params.value === "Active" ? "green" : "red" ,
            fontWeight:"bold" 
        })
        },
        {
            field: "salary",
            headerName:"Salary (₹)",
            sortable:true,
            valueFormatter: params => `₹${params.value.toLocaleString()}`,
        },
    ];

    const defaultColDef = {
        sortable: true,
        resizable: true,
        floatingFilter: true,
};

return (
    <div  style={{ height: 400, width: "100%" }}>
        <AgGridReact
        rowData={usersTableData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        pagination={true}
        paginationPageSize={5}
        />
    </div>
);
};

export default AgGridTable;