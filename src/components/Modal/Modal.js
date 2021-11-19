import React from "react";

import classes from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div className={classes.modal} style={props.style}>
      {props.children}
    </div>
  );
};

export default Modal;
