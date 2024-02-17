import { Inter } from "next/font/google";
import { Container, Button } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <Container>
                <Button>CLICK ME</Button>
            </Container>
        </>
    );
}
