import React from "react";
import "./Weather.css";

const Weather = ({ weatherData }) => {
  if (!weatherData) {
    return (
      <div className="weather">
        Select a location to see the weather details.
      </div>
    );
  }

  return (
    <div className="weather">
      <h3>Weather for {weatherData.name}</h3>
      <p>{weatherData.weather[0].description}</p>
      <p>Temperature: {weatherData.main.temp}°C</p>
      <p>Feels like: {weatherData.main.feels_like}°C</p>
      <p>Wind: {weatherData.wind.speed} m/s</p>
    </div>
  );
};

export default Weather;
