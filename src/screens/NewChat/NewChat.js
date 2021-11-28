import React from "react";

import classes from "./NewChat.module.css";
import UndrawChat from "../../assets/svg/UndrawChat";

const NewChat = (props) => {
  return (
    <div className={classes.container}>
      <UndrawChat />
      <p>¡Hola {props.name}! Inicia un chat</p>
    </div>
  );
};

export default NewChat;
