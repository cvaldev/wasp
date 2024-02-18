import HeartRating from '@/components/Rating/Rating';

export const columns = [
  {
    name: 'helperName',
    label: 'Name',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: 'dateCompleted',
    label: 'Date Completed',
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
    name: 'rating',
    label: 'Rating',
    options: {
      filter: true,
      sort: true,
      customBodyRender: (value) => {
        return <HeartRating value={value} />;
      },
    },
  },
];

export const options = {
  filterType: 'dropdown',
  textLabels: {
    body: {
      noMatch: 'Loading... hihi ^^',
    },
  },
};
