import React from "react";
import "./App.css";

export default function Humidity(props) {
  return (
    <div className="col-2">
      <div className="card details">
        <div className="col-12 card-body">Humidity</div>
        <div className="col-12">
          <span id="humidity"> {props.humidity} %</span>
          <span></span>
        </div>
      </div>
    </div>
  );
}
