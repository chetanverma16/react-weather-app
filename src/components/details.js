import React from "react";
import { Fade } from "react-reveal";

const Details = ({ currentData }) => {
  return (
    <Fade bottom cascade>
      <div className="details_wrapper">
        <div className="detail">
          <span>Temperature</span>
          <h3>{`${currentData.temp} C`}</h3>
        </div>
        <div className="detail">
          <span>Feels Like</span>
          <h3>{`${currentData.feels_like} C`}</h3>
        </div>
        <div className="detail">
          <span>Pressure</span>
          <h3>{`${currentData.pressure} hPa`}</h3>
        </div>
        <div className="detail">
          <span>Humidity</span>
          <h3>{`${currentData.humidity} %`}</h3>
        </div>
        <div className="detail">
          <span>Clouds</span>
          <h3>{`${currentData.clouds} %`}</h3>
        </div>
        <div className="detail">
          <span>Visibility</span>
          <h3>{`${currentData.visibility} meters`}</h3>
        </div>
        <div className="detail">
          <span>Wind Speed</span>
          <h3>{`${currentData.wind_speed} m/s`}</h3>
        </div>
      </div>
    </Fade>
  );
};

export default Details;
