import { React, useState } from "react";

import classes from "./App.module.css";

import Header from "./components/Header/Header";
import LoginForm from "./components/LoginForm/LoginForm";
import RegisterForm from "./components/RegisterForm/RegisterForm";

const App = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  const registerCallback = (data) => {
    setIsRegistering(data);
  };

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
