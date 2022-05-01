import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Temp from "./Temp";
import FeelsLike from "./FeelsLike";
import Wind from "./Wind";
import Humidity from "./Humidity";
import Visibility from "./Visibility";

export default function City(props) {
  // let [loaded, setloaded] = useState(false);
  // let [city, setCity] = useState("");
  // let [information, setInformation] = useState("");
  // let [temp, setTemp] = useState("");
  // let [description, setDescription] = useState("");
  // let [wind, setWind] = useState("");
  // let [feelsLike, setFeelsLike] = useState("");
  // let [icon, setIcon] = useState("");

  // function handelResponse(response) {
  //   setloaded(true);
  //   setTemp(response.data.main.temp);
  //   setDescription(response.data.weather[0].description);
  //   setWind(response.data.wind.speed);
  //   setIcon(response.data.weather[0].icon);
  //   setFeelsLike(response.data.feelsLike);
  // }
  // function search(event) {
  //   event.preventDefault();

  //   if (city !== "") {
  //     let apiKey = "689efb7d786944e7c1a6b5dddb92c594";
  //     let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;

  //     axios.get(`${apiUrl}&appid=${apiKey}`).then(handelResponse);
  //   } else {
  //     setInformation(`Pleas enter the name of city.`);
  //   }
  // }

  // function updateCity(event) {
  //   setCity(event.target.value);
  // }

  // <form onSubmit={search}>
  //   <input
  //     type="search"
  //     placeholder="Type a city"
  //     autoFocus={true}
  //     onChange={updateCity}
  //   />
  //   <input type="submit" value="Search" />
  // </form>
  return (
    <div className="row selectedCity">
      <div className="col-3">
        <h1 id="cityName">
          {props.city}
          <Temp temp={12} />
        </h1>
        <h2>
          <span id="tempreature"></span>
          <span id="unit"> </span>
        </h2>
        <FeelsLike feelsLike={10} />
        <br />
        <p id="dte"></p>
      </div>
      <div className="col-3">
        <img
          src="image/sunnycloudySM.png"
          width="150px"
          height="150px"
          alt="SunnyCloudy"
          id="dayIcon"
        />
      </div>
      <Wind wind={10.29} />
      <Humidity humidity={54} />
      <Visibility visibility={84} />
    </div>
  );
}
