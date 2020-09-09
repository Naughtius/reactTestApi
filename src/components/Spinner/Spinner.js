import React from "react";
import classes from "./Spinner.css";
import icon from "./spinner-icon.svg";

const Spinner = () => (
   <div className={classes.Spinner}>
      <img src={icon} alt="spinner-icon" />
   </div>
);

export default Spinner;
