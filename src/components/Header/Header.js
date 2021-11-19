import React from "react";
import Button from "../Button/Button";

import classes from "./Header.module.css";

import { getAuth, signOut } from "firebase/auth";

const Header = (props) => {
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
    <header className={classes.header}>
      <p>{props.title}</p>
      {props.isLoggedIn ? <Button text="Logout" onClick={handleLogout} /> : ""}
    </header>
  );
};

export default Header;
