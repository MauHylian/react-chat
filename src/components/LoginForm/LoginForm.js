import { useState } from "react";

import classes from "./LoginForm.module.css";

import Modal from "../Modal/Modal";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginForm = (props) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const { email, password } = values;

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    // console.log(value);
    // console.log(name);
    setValues({ ...values, [name]: value });
  };

  const handleClick = () => {
    props.handleRegisterClick(true);
  };

  const handleLogin = async (e) => {
    const auth = getAuth();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential);
      // If credentials exist
      props.handleLogin(true);
    } catch (error) {
      console.error(error);
    }
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
        name="email"
        value={email}
        onChange={handleChange}
        style={{ marginBottom: "1rem" }}
        type="email"
        placeholder="E-mail"
      />
      <TextInput
        name="password"
        value={password}
        onChange={handleChange}
        style={{ marginBottom: "1rem" }}
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
