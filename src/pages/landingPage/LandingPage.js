import { Button, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import landingImage from "./landingImage.jpg";
import { AppLink } from "../../components/AppLink";

export default function LandingPage(props) {
    return (
        <Grid container height="100vh">
            <Grid item xs={8} sx={{ padding: "10%" }}>
                <Stack maxWidth="55%" spacing={8}>
                    <Typography fontWeight="bold" variant="h3" gutterBottom>
                        Our Community Provides Help For Seniors
                    </Typography>
                    <Stack>
                        <Button
                            size="large"
                            variant="contained"
                            sx={{ height: "5em" }}
                            href="/signup?userType=senior"
                            LinkComponent={AppLink}
                        >
                            <Typography variant="h6">Senior Sign In</Typography>
                        </Button>
                        <Typography
                            href="/signup?userType=volunteer"
                            component={AppLink}
                            sx={{ display: "flex", alignSelf: "center" }}
                        >
                            Community Member Sign In
                        </Typography>
                    </Stack>
                </Stack>

                <Image
                    src={landingImage}
                    style={{ position: "absolute", top: "25vh", left: "50vw" }}
                />
            </Grid>
            <Grid
                item
                xs={4}
                sx={{
                    height: "100%",
                    backgroundColor: (theme) => theme.palette.secondary.main,
                }}
            />
        </Grid>
    );
}
