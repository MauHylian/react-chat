import React from "react";

import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <p>{props.title}</p>
    </header>
  );
};

export default Header;
