import React from "react";

export default function Current() {
  let cityInfo = {
    City: "London",
    Temperature: "-3",
    Image: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    lastUpdated: "Saturday, 20:22",
  };

  return (
    <div className="current">
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
            <li className="staticTemperature" id="description"></li>
          </span>
        </div>
      </div>
    </div>
  );
}
