import React from "react";
import { Fade } from "react-reveal";

const Header = ({ currentLocation }) => {
  return (
    <div className="header">
      <Fade bottom cascade>
        <h1>Rich Panel Weather App</h1>
      </Fade>
      <form>
        <input
          type="text"
          className="search_bar"
          placeholder="Search City"
          value={currentLocation}></input>
      </form>
    </div>
  );
};

export default Header;
