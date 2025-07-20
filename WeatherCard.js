import React from "react";
import "./WeatherCard.css";

function WeatherCard({
  temp,
  weatherMood,
  name,
  country,
  sunset,
  humidity,
  pressure,
  speed,
}) {
  const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();

  return (
    <div className="weather-box">
      <div className="weather-main">
        <h2>{temp}°C | {weatherMood.toLowerCase()}</h2>
        <p>{name}, {country}</p>
        <p>Weather Info</p>
      </div>

      <div className="weather-details">
        <div className="info-box">
          <i className="fas fa-sun"></i>
          <p>{sunsetTime}<br />sunset</p>
        </div>
        <div className="info-box">
          <i className="fas fa-tint"></i>
          <p>{humidity}%<br />humidity</p>
        </div>
        <div className="info-box">
          <i className="fas fa-wind"></i>
          <p>{speed} m/s<br />wind</p>
        </div>
        <div className="info-box">
          <i className="fas fa-tachometer-alt"></i>
          <p>{pressure} hPa<br />pressure</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
