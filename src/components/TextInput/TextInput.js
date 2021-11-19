import React from "react";

import classes from "./TextInput.module.css";

const TextInput = (props) => {
  return (
    <input
      className={classes.input}
      style={props.style}
      type={props.type}
      placeholder={props.placeholder}
    ></input>
  );
};

export default TextInput;
