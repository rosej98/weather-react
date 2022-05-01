import React, { useState } from "react";

import Forecast from "./Forecast";
import City from "./City";
import Search from "./Search";
import "./App.css";

export default function Weather(props) {
  return (
    <div className="weather">
      <form>
        <div className="card main">
          <div className="card-body">
            <Search />
          </div>
        </div>
      </form>
    </div>
  );
}
