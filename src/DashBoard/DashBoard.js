import React, { useState } from "react";
import DisplayOption from "./Flyout/DisplayOption";
import WeatherInformation from "./Flyout/WeatherInformation";
import classes from "./DashBoard.module.css";
import Legends from "./Flyout/Legends";

function DashBoard() {
  const [displayOption, setDisplayOption] = useState(false);
  const displayOptionToggle = () => {
    setDisplayOption((prestate) => !prestate);
    setWeather(false);
    setLegends(false);
  };
  const [weather, setWeather] = useState(false);
  const WeatherToggle = () => {
    setWeather((prestate) => !prestate);
    setDisplayOption(false);
    setLegends(false);
  };
  const [legends, setLegends] = useState(false);
  const legendsToggle = () => {
    setLegends((prestate) => !prestate);
    setDisplayOption(false);
    setWeather(false);
  };
  return (
    <div>
      <div className={`${classes.FlyoutDiv}`}>
        <button
          className={classes.FlyoutButton}
          style={{ backgroundColor: displayOption ? "grey" : "skyblue" }}
          onClick={displayOptionToggle}
        >
          Display Option
        </button>
        <button
          className={classes.FlyoutButton}
          style={{ backgroundColor: weather ? "grey" : "skyblue" }}
          onClick={WeatherToggle}
        >
          Weather Information
        </button>
        <button
          className={classes.FlyoutButton}
          style={{ backgroundColor: legends ? "grey" : "skyblue" }}
          onClick={legendsToggle}
        >
          Legends
        </button>
      </div>
      <DisplayOption show={displayOption} />
      <WeatherInformation show={weather} />
      <Legends show={legends} />
    </div>
  );
}

export default DashBoard;
