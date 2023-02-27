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
              <FormattedDate date={props.data.date} />
            </li>
          </ul>
        </div>
        <div className="col-6">
          <WeatherIcon code={props.data.icon} size={52} />
          <span className="currentTemperature" id="temp">
            <Temperature celsius={props.data.temperature} />
          </span>
          <span className="units">
            °C
            <li className="staticTemperature" id="description">
              {props.data.description}
            </li>
          </span>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-4">
          <div className="temperature">High</div>
          <span id="high">{props.data.max}</span>°
        </div>

        <div className="col-4">
          <div className="speed">Wind</div>
          <span id="wind">{props.data.wind}</span> m/s
        </div>

        <div className="col-4">
          <div className="daytime">Sunrise</div>
          <span id="bright">{props.data.sunrise}</span>
        </div>

        <div className="col-4">
          <div className="low-temperature">Low</div>
          <span id="low">{props.data.min}</span>°
        </div>

        <div className="col-4">
          <div className="chance">Humidity</div>
          <span id="humidity">{props.data.humidity}</span>%
        </div>

        <div className="col-4">
          <div className="nightfall">Sunset</div>
          <span id="dark">{props.data.sunset}</span>
        </div>
      </div>
      <hr />
    </div>
  );
}
