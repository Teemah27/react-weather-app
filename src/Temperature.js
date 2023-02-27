import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");

  function setFahrenheit(event) {
    event.preventDefault();
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    setUnit(fahrenheit);
  }

  function setCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherUnit d-inline">
        <span className="degrees">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={setFahrenheit}>
            °F
          </a>{" "}
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherUnit d-inline">
        <span className="degrees">{Math.round(unit)}</span>
        <span className="unit">
          <a href="/" onClick={setCelsius}>
            C°
          </a>
          | °F{" "}
        </span>
      </div>
    );
  }
}
