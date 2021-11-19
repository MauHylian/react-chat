import React from "react";

import classes from "./LoginForm.module.css";

import Modal from "../Modal/Modal";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";

const LoginForm = (props) => {
  const handleClick = () => {
    props.handleRegisterClick(true);
  };

  const handleLogin = () => {
    console.log("Clicked login");
  };

  return (
    <Modal>
      <p
        style={{
          marginBottom: "1rem",
          textAlign: "center",
          fontWeight: "lighter",
          fontSize: "3rem",
          fontStyle: "italic",
        }}
        className={classes.loginTitle}
      >
        Pictochat
      </p>
      <TextInput
        style={{ marginBottom: "1rem" }}
        type="text"
        placeholder="Username"
      />
      <TextInput
        style={{ marginBottom: "2rem" }}
        type="password"
        placeholder="Password"
      />
      <Button text="Login" onClick={handleLogin} />
      <div className={classes.register}>
        <p>Don't have an account?</p>
        <p onClick={handleClick}>Register</p>
      </div>
    </Modal>
  );
};

export default LoginForm;
