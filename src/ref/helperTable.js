import { Chip } from '@mui/material';
export const columns = [
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


