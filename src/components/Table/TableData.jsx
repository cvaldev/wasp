import * as React from 'react';
import MUIDataTable, { TableFilterList } from 'mui-datatables';

const columns = [
  {
    name: 'reuqestId',
    label: 'Request ID',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: 'distance',
    label: 'Distance',
    options: {
      filter: false,
      sort: false,
    },
  },
  {
    name: 'status',
    label: 'Status',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: 'acceptdecline',
    label: 'Accept/Decline',
    options: {
      filter: true,
      sort: true,
      customBodyRender: (value) => {
        // Define a function to render the type with different colors
        const typeColor = value === 'accept' ? 'green' : 'red';
        return (
          <Chip
            label={value}
            style={{ color: typeColor, bacgroundColor: 'none' }}
          />
        );
      },
    },
  },
];

const options = {
  filterType: 'dropdown',
  textLabels: {
    body: {
      noMatch: 'Loading... hihi ^^',
    },
  },
};

const TableData = ({ data }) => {
  return <MUIDataTable data={data} columns={columns} options={options} />;
};

export default TableData;
