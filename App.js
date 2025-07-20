import React, { useEffect, useState } from "react";
import "./App.css";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const getWeatherInfo = async () => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const city = "Bengaluru";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      const { temp, humidity, pressure } = data.main;
      const { main: weatherMood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const weatherObj = {
        temp,
        humidity,
        pressure,
        weatherMood,
        name,
        speed,
        country,
        sunset,
      };

      setWeatherData(weatherObj);
    } catch (error) {
      console.error("Error fetching weather data", error);
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <div className="main">
      <h1>React Weather App</h1>
      {weatherData && <WeatherCard {...weatherData} />}
    </div>
  );
}

export default App;
