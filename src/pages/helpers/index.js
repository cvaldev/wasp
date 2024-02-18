import React, { useState } from "react";
import LabTabs from "@/components/Tab/LabTabs";
import { Alert, Grid } from "@mui/material";
import MapWithRoute from "../api/initmap";

export default function HelperView() {
    const [selectedRow, setSelectedRow] = useState(null);
    const originAddress = "1600 Amphitheatre Parkway, Mountain View, CA";
    const destinationAddress = "1 Infinite Loop, Cupertino, CA";
    const options = {
        filterType: "dropdown",
        textLabels: {
            body: {
                noMatch: "Loading... hihi ^^",
            },
        },
    };
    const handleRowClick = (rowData) => {
        setSelectedRow(rowData);
    };
    return (
        <Grid container spacing={2} paddingTop={8} paddingLeft={5}>
            <Grid item xs={8}>
                <Grid container direction="column" spacing={2}>
                    <Grid item>
                        <Alert
                            variant="filled"
                            severity="warning"
                            style={{ width: "40%" }}
                        >
                            1 Emergency Alert and 2 New Requests
                        </Alert>
                    </Grid>
                    <Grid item>
                        <LabTabs options={options} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={4}>
                <div>Details</div>
                <MapWithRoute
                    origin={originAddress}
                    destination={destinationAddress}
                />
            </Grid>
        </Grid>
    );
}
