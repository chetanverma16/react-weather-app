import React from "react";
import { Fade } from "react-reveal";
import Moment from "react-moment";

// Icons
import Sunny from "../images/sun.svg";
import Cloud from "../images/cloud.svg";
import Rain from "../images/rain.svg";

const Header = ({ previousWeatherData }) => {
  const findIcon = (value) => {
    switch (value) {
      case "Rain":
        return Rain;
      case "Clouds":
        return Cloud;
      case "Sunny":
        return Sunny;
      case "Clear":
        return Sunny;
      default:
        return Sunny;
    }
  };

  return (
    <div className="header">
      <Fade bottom cascade>
        <h1>Rich Panel Weather App</h1>
      </Fade>

      <form>
        <input
          type="text"
          className="search_bar"
          placeholder={
            previousWeatherData.city
              ? previousWeatherData.city.name
              : "Enter City Name"
          }></input>
      </form>
      <div className="previous_weather">
        {previousWeatherData
          ? previousWeatherData.list.map((day) => (
              <div className="previousinfo">
                <h3>
                  {
                    <Moment format="ddd" unix>
                      {day.dt}
                    </Moment>
                  }
                </h3>
                <span>{`${day.temp.day} F `}</span>
                <img className="icon" src={findIcon(day.weather[0].main)}></img>
                <h3>{day.weather[0].main}</h3>
              </div>
            ))
          : "Loading..."}
      </div>
    </div>
  );
};

export default Header;
