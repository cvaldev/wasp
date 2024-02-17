import { Inter } from "next/font/google";
import { Container, Button } from "@mui/material";
import axios from 'axios';
import { useState } from 'react';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState({});
    const [loading, setLoading] = useState(false);

    const url = `https://pro.openweathermap.org/data/2.5/forecast/climate?q=toronto,1&appid=77fcc8ce22ab9dede2f8ce43331f6dcf`
    return (
        <>
            <Container>
                <Button href="/clients">GO TO CLIENTS VIEW</Button>
                <Button href="/helpers">GO TO HELPER VIEW</Button>
                <Button onClick={fetchWeather}></Button>
            </Container>
        </>
    );
}
