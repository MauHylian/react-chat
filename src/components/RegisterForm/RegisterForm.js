import { useState } from "react";

import classes from "./RegisterForm.module.css";

import Modal from "../Modal/Modal";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const RegisterForm = (props) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { username, email, password, confirmPassword } = values;

  const handleClick = () => {
    props.handleRegisterClick(false);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    // console.log(value);
    // console.log(name);
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submit");
    console.log(values);

    const auth = getAuth();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential);
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
      <form onSubmit={handleSubmit}>
        <TextInput
          name="username"
          value={username}
          onChange={handleChange}
          style={{ marginBottom: "1rem" }}
          type="text"
          placeholder="Username"
        />
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
        <TextInput
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          style={{ marginBottom: "2rem" }}
          type="password"
          placeholder="Confirm password"
        />
        <Button text="Register" />
        <div className={classes.register}>
          <p>Already have an account?</p>
          <p onClick={handleClick}>Login</p>
        </div>
      </form>
    </Modal>
  );
};

export default RegisterForm;
