import React, { useState } from "react";
import Geolocation from "./Geolocation";

export default function Current() {
  let cityInfo = {
    City: "London",
    Temperature: "-3",
    Image: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    lastUpdated: "Saturday, 20:22",
  };

  let [city, setCity] = useState();
  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${city}`);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="current">
      <form id="search-form" onSubmit={handleSubmit}>
        <div class="input-group">
          <input
            type="search"
            className="form-control shadow-sm"
            placeholder="Enter a city"
            id="search-text-input"
            onChange={updateCity}
          />
          <input
            type="submit"
            className="btn btn-outline-dark shadow-sm"
            value="Search"
          />
        </div>
        <Geolocation />
      </form>
      <div className="row">
        <div className="col-6">
          <h1 id="city">{cityInfo.City}</h1>
          <ul>
            <li>
              last updated: <span id="date">{cityInfo.lastUpdated}</span>
            </li>
          </ul>
        </div>
        <div className="col-6">
          <img src={cityInfo.Image} alt="cloudy weather" id="icon" />
          <span className="currentTemperature" id="temp">
            {cityInfo.Temperature}
          </span>
          <span className="units">
            °C
            <li className="staticTemperature" id="description">
              Mostly Cloudy
            </li>
          </span>
        </div>
      </div>
    </div>
  );
}
