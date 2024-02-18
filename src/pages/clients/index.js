import { Alert, Grid } from '@mui/material';
import { columns } from '@/ref/clientTable';
import { options } from '@/ref/clientTable';
import TableData from '@/components/Table/TableData';
import { data } from '@/data/helper';

export default function Client() {
  return (
    <Grid container spacing={2} paddingTop={8} paddingLeft={5}>
      <Grid item xs={8}>
        <Grid container direction='column' spacing={2}>
          <Grid item>
            <Alert variant='filled' severity='success' style={{ width: '40%' }}>
              We found 1 volunteer for you!
            </Alert>
          </Grid>
          <Grid item>
            {data.length === 0 && (
              <Alert
                variant='filled'
                severity='warning'
                style={{ width: '40%' }}
              >
                No volunteers found
              </Alert>
            )}
            <TableData data={data} columns={columns} options={options} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <div>Details</div>
      </Grid>
    </Grid>
  );
}
