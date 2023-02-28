import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <h1>{props.data.city}</h1>
          <ul>
            <li>
              Last updated: <FormattedDate date={props.data.date} />
            </li>
          </ul>
        </div>
        <div className="col-6">
          <WeatherIcon code={props.data.icon} size={52} alt={props.data.icon} />
          <span className="currentTemperature" id="temp">
            <Temperature celsius={props.data.temperature} />
          </span>
          <span className="units">
            °C| <a href="/">°F</a>
          </span>
          <li className="staticTemperature" id="description">
            {props.data.description}
          </li>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-4">
          <div className="temperature">Today</div>
          <span className="current">{props.data.temperature}</span>°
        </div>

        <div className="col-4">
          <div className="speed">Wind</div>
          <span className="wind">{props.data.wind}</span> m/s
        </div>

        <div className="col-4">
          <div className="country">Country</div>
          <span id="country">{props.data.country}</span>
        </div>

        <div className="col-4">
          <div className="pressure">Pressure</div>
          <span id="pressure">{props.data.pressure}</span>
        </div>

        <div className="col-4">
          <div className="chance">Humidity</div>
          <span id="humidity">{props.data.humidity}</span>%
        </div>

        <div className="col-4">
          <div className="feel">Feels Like</div>
          <span id="dark">{props.data.feels_like}°</span>
        </div>
      </div>
      <hr />
    </div>
  );
}
