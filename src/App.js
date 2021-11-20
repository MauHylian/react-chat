import { React, useState } from "react";

import classes from "./App.module.css";

import Header from "./components/Header/Header";
import LoginForm from "./components/LoginForm/LoginForm";
import Sidebar from "./components/Nav/Sidebar/Sidebar";
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
  };

  const logoutCallback = (data) => {
    setIsLoggedIn(data);
  };

  return (
    <div className={classes.App}>
      <Header
        title="Pictochat"
        isLoggedIn={isLoggedIn}
        handleLogout={logoutCallback}
      />
      <div style={{ display: "flex", height: "100%" }}>
        <Sidebar />
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
    </div>
  );
};

export default App;
