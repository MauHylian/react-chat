import React from "react";

import classes from "./Link.module.css";

const Link = (props) => {
  return (
    <div style={props.style} className={classes.link}>
      <div className={classes.icon}>{props.icon}</div>
      <div className={classes.text}>{props.text}</div>
    </div>
  );
};

export default Link;
