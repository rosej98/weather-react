import React from "react";

export default function Forecast(props) {
  return (
    <div>
      <div className="nxtDaysPred">Next 5 Days</div>
      <div className="weather-forecast" id="forecast"></div>
    </div>
  );
}
