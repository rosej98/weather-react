import React, { useState } from "react";
import "./App.css";
import axios from "axios";

export default function Search(props) {
  return (
    <div className="row">
      <div className="col-6">
        <input
          type="search"
          id="searchCityName"
          autoComplete="off"
          placeholder="Search for location (city, country)"
          autoFocus
        />
        <button type="submit" className="search" id="city"></button>
      </div>
      <div className="col-6">
        <table>
          <tbody>
            <tr>
              <td>
                <button id="currntLoc">Current City</button>
              </td>
              <td>
                <span id="alert">Weather Alert If Any</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
