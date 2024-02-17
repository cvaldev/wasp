import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import TableData from '../Table/TableData';
import CustomTabPanel from './CustomTabPanel';

export default function LabTabs() {
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabs = [
    {
      label: 'Incomplete Requests',
      value: 1,
    },
    {
      label: 'Incoming Requests',
      value: 2,
    },
    {
      label: 'Completed Requests',
      value: 3,
    },
  ];

  const tabpanel = [
    {
      value: 1,
      content: <TableData />,
    },
    {
      value: 2,
      content: 'Item Two',
    },
  ];

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='lab API tabs example'
        >
          {tabs.map((tab) => (
            <Tab label={tab.label} key={tab.value} value={tab.value} />
          ))}
        </Tabs>
      </Box>
      {tabpanel.map((panel) => (
        <CustomTabPanel value={value} index={panel.value} key={panel.value}>
          {panel.content}
        </CustomTabPanel>
      ))}
    </Box>
  );
}
