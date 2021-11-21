import { React, useState } from "react";

import classes from "./App.module.css";

import Header from "./components/Header/Header";
import LoginForm from "./components/LoginForm/LoginForm";
import Sidebar from "./components/Nav/Sidebar/Sidebar";
import RegisterForm from "./components/RegisterForm/RegisterForm";

import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutIcon from "@mui/icons-material/Logout";

import Link from "./components/Nav/Link/Link";
import UserInfo from "./components/UserInfo/UserInfo";

import Pic from "./assets/profilepic.png";
import NonSquare from "./assets/nonsquare.jpg";

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
      <div style={{ display: "flex", height: "100%" }}>
        {isLoggedIn ? (
          <div style={{ display: "flex" }}>
            <Sidebar>
              <UserInfo
                src={NonSquare}
                name="MauHylian"
                email="mauhylian@gmail.com"
              />
              <Link
                onClick={() => console.log("Settings")}
                icon={<SettingsOutlinedIcon />}
                text="Settings"
              />
              <Link
                handleLogout={logoutCallback}
                style={{ backgroundColor: "#ff7070" }}
                icon={<LogoutIcon />}
                text="Logout"
              />
            </Sidebar>
            <p>Logged in</p>
          </div>
        ) : isRegistering ? (
          <div style={{ width: "100%" }}>
            <Header
              title="Pictochat"
              isLoggedIn={isLoggedIn}
              handleLogout={logoutCallback}
            />
            <RegisterForm handleRegisterClick={registerFalseCallback} />
          </div>
        ) : (
          <div style={{ width: "100%" }}>
            <Header
              title="Pictochat"
              isLoggedIn={isLoggedIn}
              handleLogout={logoutCallback}
            />
            <LoginForm
              handleRegisterClick={registerCallback}
              handleLogin={loginCallback}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
