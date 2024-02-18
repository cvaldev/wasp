import * as React from 'react';
import MUIDataTable from 'mui-datatables';

const TableData = ({ data, columns, options }) => {
  return <MUIDataTable data={data} columns={columns} options={options} />;
};

export default TableData;
