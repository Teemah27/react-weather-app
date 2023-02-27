import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.city);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      low: response.data.main.temp_min,
      high: response.data.main.temp_max,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
      sunset: new Date(response.data.sys.sunset * 1000),
      sunrise: new Date(response.data.sys.sunrise * 1000),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCity(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "af12a2daa1c4c04cebdde84de8f2f6a6";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="current">
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
    return "Loading...";
  }
}
