import { React, useState } from "react";

import classes from "./App.module.css";

import Header from "./components/Header/Header";
import LoginForm from "./components/LoginForm/LoginForm";
import RegisterForm from "./components/RegisterForm/RegisterForm";

const App = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Gets TRUE from the LoginForm component, meaning the user clicked
  // Register and now the app should display the RegisterForm component
  const registerCallback = (data) => {
    setIsRegistering(data);
  };

  // Gets FALSE from the RegisterForm component, enabling to switch forms
  const registerFalseCallback = (data) => {
    setIsRegistering(data);
  };

  const loginCallback = (data) => {
    setIsLoggedIn(data);
    console.log(data);
  };

  const logoutCallback = (data) => {
    console.log(data);
    setIsLoggedIn(data);
  };

  return (
    <div className={classes.App}>
      <Header
        title="Pictochat"
        isLoggedIn={isLoggedIn}
        handleLogout={logoutCallback}
      />
      {isLoggedIn ? (
        <p>Logged in</p>
      ) : isRegistering ? (
        <RegisterForm handleRegisterClick={registerFalseCallback} />
      ) : (
        <LoginForm
          handleRegisterClick={registerCallback}
          handleLogin={loginCallback}
        />
      )}
    </div>
  );
};

export default App;
