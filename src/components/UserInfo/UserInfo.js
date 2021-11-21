import React from "react";

import classes from "./UserInfo.module.css";

const UserInfo = (props) => {
  return (
    <div className={classes.infoContainer}>
      <div className={classes.imgContainer}>
        <div className={classes.mask}>
          <img src={props.src} alt="User profile pic" />
        </div>
      </div>
      <p>{props.name}</p>
      <p>{props.email}</p>
    </div>
  );
};

export default UserInfo;
