import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.time * 1000),
      coordinates: response.data.coordinates,
      feels_like: Math.round(response.data.temperature.feels_like),
      temperature: Math.round(response.data.temperature.current),
      pressure: response.data.temperature.pressure,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      wind: Math.round(response.data.wind.speed),
      city: response.data.city,
      country: response.data.country,
    });
  }

  function search() {
    const apiKey = "0bfcc322553aoc7t2693d43b93fcef4e";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form id="search-form" onSubmit={handleSubmit}>
          <div class="input-group">
            <input
              type="search"
              className="form-control shadow-sm"
              placeholder="Enter a city"
              id="search-text-input"
              onChange={handleCity}
            />
            <input
              type="submit"
              className="btn btn-outline-dark shadow-sm"
              value="Search"
            />
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <Forecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return `Loading...`;
  }
}
