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
      feels_like: response.data.temperature.feels_like,
      temperature: response.data.temperature.current,

      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      wind: response.data.wind.speed,
      city: response.data.city,
      sunset: new Date(response.data.sys.sunset * 1000),
      sunrise: new Date(response.data.sys.sunrise * 1000),
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
