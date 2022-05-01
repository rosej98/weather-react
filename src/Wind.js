import React from "react";
import "./App.css";
export default function Wind(props) {
  return (
    <div className="col-2">
      <div className="card details">
        <div className="col-12 card-body">Wind</div>
        <div className="col-12">
          <span id="wind"> {props.wind} km/h</span>
          <span></span>
        </div>
      </div>
    </div>
  );
}
