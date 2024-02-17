import { Inter } from "next/font/google";
import { Container, Button } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <Container>
                <Button href="/clients">GO TO CLIENTS VIEW</Button>
                <Button href="/helpers">GO TO HELPER VIEW</Button>
            </Container>
        </>
    );
}
