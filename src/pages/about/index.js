import { useState } from "react";
import axios from "axios";
import Weather from "@/components/weather";

export default function About() {
    const [city, setCity] = useState("");
    const [weater, setWeather] = useState({});
    const [loading, setLoading] = useState(false);
    const fetchWeather = (e) => {
        e.preventDefault();
        setLoading(true);

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=77fcc8ce22ab9dede2f8ce43331f6dcf`;
        axios.get(url).then((response) => {
            setWeather(response.data);
            console.log(response.data);
        });
        setCity("");
        setLoading(false);
    };
  return (
    <div>
      <form onSubmit={fetchWeather} className='cityForm'>
        <div>
          <input
            onChange={(e) => setCity(e.target.value)}
            className='cityForm'
            type='text'
            placeholder='Search city'
          />
        </div>
      </form>
      <button onClick={fetchWeather}>Fetch data</button>
      {Weather.main && <Weather data={weather} />}
    </div>
  );
}
