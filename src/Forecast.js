import React from "react";
import Weekdays from "./Weekdays";

export default function Forecast() {
  return (
    <div className="Forecast">
      <p>Next 6 days</p>
      <div className="row">
        <Weekdays day="Sunday" />
        <Weekdays day="Monday" />
        <Weekdays day="Tuesday" />
        <Weekdays day="Wednesday" />
        <Weekdays day="Thursday" />
        <Weekdays day="Friday" />
      </div>
    </div>
  );
}
