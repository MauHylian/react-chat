import { React, useState } from "react";

import classes from "./App.module.css";

import Header from "./components/Header/Header";
import LoginForm from "./components/LoginForm/LoginForm";
import RegisterForm from "./components/RegisterForm/RegisterForm";

const App = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  // Gets TRUE from the LoginForm component, meaning the user clicked
  // Register and now the app should display the RegisterForm component
  const registerCallback = (data) => {
    setIsRegistering(data);
  };

  // Gets FALSE from the RegisterForm component, enabling to switch forms
  const registerFalseCallback = (data) => {
    setIsRegistering(data);
  };

  return (
    <div className={classes.App}>
      <Header title="Pictochat" />
      {isRegistering ? (
        <RegisterForm handleRegisterClick={registerFalseCallback} />
      ) : (
        <LoginForm handleRegisterClick={registerCallback} />
      )}
    </div>
  );
};

export default App;
