import { Box } from "@mui/system";

export default function ClientCard({ volunteer }) {
    return (
        <Grid>
            <Image src="/volunteer.jpg" alt="volunteer" width={300} height={300} />
            <Box sx={{ fontSize: 20, fontWeight: 'bold' }}>{volunteer.name}</Box>
            <Box sx={{ fontSize: 16 }}>{volunteer.rating}</Box>
        </Grid>
    );
}
