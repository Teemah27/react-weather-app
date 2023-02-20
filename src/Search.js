import React, { useState } from "react";
import Geolocation from "./Geolocation";

export default function Search() {
  let [city, setCity] = useState();
  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${city}`);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
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
  );
}
