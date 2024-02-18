import { useSearchParams } from "next/navigation";
import SignUpCommunity from "./SignUpCommunity";
import { Container } from "@mui/material";

export default function SignUpForm() {
    const searchParams = useSearchParams();

    return (
        <Container sx={{ pt: 2 }}>
            <SignUpCommunity userType={searchParams.get("userType")} />
        </Container>
    );
}

