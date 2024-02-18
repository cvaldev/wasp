import * as React from "react";
import MUIDataTable from "mui-datatables";

const TableData = ({ data, columns, options }) => {
    return (
        <MUIDataTable
            data={data}
            columns={columns}
            options={options}
            download={false}
            print={false}
            filter={false}
            search={false}
        />
    );
};

export default TableData;
