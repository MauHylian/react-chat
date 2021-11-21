import React from "react";

import classes from "./Sidebar.module.css";

import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

import Link from "../Link/Link";

const Sidebar = (props) => {
  return <div className={classes.sidebar}>{props.children}</div>;
};

export default Sidebar;
