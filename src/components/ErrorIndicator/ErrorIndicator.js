import React from "react";
import classes from "./ErrorIndicator.css";

const ErrorIndicator = () => (
   <div className={classes.errorIndicator}>
      <span className={classes.errorIndicator_text}>BOOM!!!</span>
   </div>
);

export default ErrorIndicator;
