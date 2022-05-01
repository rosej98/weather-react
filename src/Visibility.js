import React from "react";
import "./App.css";

export default function Visibility(props) {
  return (
    <div className="col-2">
      <div className="card details">
        <div className="col-12 card-body">Visibilty</div>
        <div className="col-12">
          <span id="visibility"> {props.visibility} %</span>
          <span></span>
        </div>
      </div>
    </div>
  );
}
