import React from "react";

import classes from "./Sidebar.module.css";

import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

import Link from "../Link/Link";

const Sidebar = (props) => {
  return (
    <div className={classes.sidebar}>
      <Link icon={<SettingsOutlinedIcon />} text="Settings" />
    </div>
  );
};

export default Sidebar;
