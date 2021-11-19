import React from "react";
import Modal from "../Modal/Modal";

import classes from "./RegisterForm.module.css";

import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";

const RegisterForm = (props) => {
  const handleClick = () => {
    props.handleRegisterClick(false);
  };

  return (
    <Modal>
      <p
        style={{ marginBottom: "1rem", textAlign: "center" }}
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
        style={{ marginBottom: "1rem" }}
        type="email"
        placeholder="E-mail"
      />
      <TextInput
        style={{ marginBottom: "1rem" }}
        type="password"
        placeholder="Password"
      />
      <TextInput
        style={{ marginBottom: "2rem" }}
        type="password"
        placeholder="Confirm password"
      />
      <Button text="Register" />
      <div className={classes.register}>
        <p>Already have an account?</p>
        <p onClick={handleClick}>Login</p>
      </div>
    </Modal>
  );
};

export default RegisterForm;
