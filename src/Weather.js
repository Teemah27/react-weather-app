import React from "react";

function Weather() {
  let weatherData = {
    High: "19",
    Low: "4",
    Sunrise: "05.45",
    Sunset: "20:45",
    Humidity: 80,
    Wind: 10,
  };
  return (
    <div className="Weatherapp">
      <hr />
      <div className="row">
        <div className="col-4">
          <div className="temperature">High</div>
          <span id="high">{weatherData.High}</span>°
        </div>

        <div className="col-4">
          <div className="speed">Wind</div>
          <span id="wind">{weatherData.Wind}</span> m/s
        </div>

        <div className="col-4">
          <div className="daytime">Sunrise</div>
          <span id="bright">{weatherData.Sunrise}</span>
        </div>

        <div className="col-4">
          <div className="low-temperature">Low</div>
          <span id="low">{weatherData.Low}</span>°
        </div>

        <div className="col-4">
          <div className="chance">Humidity</div>
          <span id="humidity">{weatherData.Humidity}</span>%
        </div>

        <div className="col-4">
          <div className="nightfall">Sunset</div>
          <span id="dark">{weatherData.Sunset}</span>
        </div>
      </div>
      <hr />
    </div>
  );
}
export default Weather;
