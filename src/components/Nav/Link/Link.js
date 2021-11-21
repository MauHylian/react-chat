import React from "react";

import classes from "./Link.module.css";

import { getAuth, signOut } from "firebase/auth";

const Link = (props) => {
  const handleLogout = async () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // Send false to change the is LoggedIn state in App
        props.handleLogout(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      onClick={props.handleLogout ? handleLogout : props.onClick}
      style={props.style}
      className={classes.link}
    >
      <div className={classes.icon}>{props.icon}</div>
      <div className={classes.text}>{props.text}</div>
    </div>
  );
};

export default Link;
