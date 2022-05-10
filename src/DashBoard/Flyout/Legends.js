import React from "react";
import classes from "./Flyout.module.css";

function Legends(props) {
  let flyoutClass = [`${classes.mainDiv}`];
  if (props.show) {
    flyoutClass = [`${classes.mainDiv} ${classes.animation}`];
  }

  return <nav className={flyoutClass.join(" ")}>Legends</nav>;
}

export default Legends;
