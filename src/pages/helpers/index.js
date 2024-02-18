import LabTabs from "@/components/Tab/LabTabs";
import { Alert, Grid } from "@mui/material";

export default function HelperView() {
  return (
    <Grid container spacing={2} paddingTop={8} paddingLeft={5}>
      <Grid item xs={8}>
        <Grid container direction='column' spacing={2}>
          <Grid item>
            <Alert variant='filled' severity='warning' style={{ width: '40%' }}>
              1 Emergency Alert and 2 New Requests
            </Alert>
          </Grid>
          <Grid item>
            <LabTabs />
          </Grid>
        </Grid>
    );
}
