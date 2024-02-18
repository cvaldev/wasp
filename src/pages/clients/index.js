import { Alert, Grid, Button, Container, Stack } from "@mui/material";
import { columns, options } from "@/ref/clientTable";
import TableData from "@/components/Table/TableData";
import { data } from "@/data/helper";
import { useState } from "react";
import SuccessSnackBar from "@/components/SuccessSnackBar";

export default function Client() {
    const [requestSent, setRequestSent] = useState(false);
    const handleOnClickRequest = async (e) => {
        e.preventDefault();
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_HOST}/api/insertRequest`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    seniorID: Math.floor(Math.random() * (21 - 10) + 10),
                    distance: 123,
                }),
            }
        );

        if (res.ok) {
            setRequestSent(true);
        }
    };
    return (
        <Container>
            <Stack paddingTop={2} spacing={2}>
                <Grid item>
                    <Button variant="contained" onClick={handleOnClickRequest}>
                        Send Request
                    </Button>
                </Grid>
                <Grid item>
                    {data.length === 0 && (
                        <Alert
                            variant="filled"
                            severity="warning"
                            style={{ width: "40%" }}
                        >
                            No volunteers found
                        </Alert>
                    )}
                    <TableData
                        data={data}
                        columns={columns}
                        options={options}
                    />
                </Grid>
            </Stack>
            <SuccessSnackBar
                open={requestSent}
                onClose={() => setRequestSent(false)}
                message="Request Sent"
            />
        </Container>
    );
}
