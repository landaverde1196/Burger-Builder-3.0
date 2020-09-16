import React from "react";
import classes from "./Layout.module.css";
import Toolbar from "../../components/UI/Toolbar";

import { checkIsAuthenticated } from "../../selectors";
import { useSelector } from "react-redux";

const Layout = (props) => {
  const isAuthenticated = useSelector(checkIsAuthenticated);
  return (
    <>
      <Toolbar isAuth={isAuthenticated} />

      <main className={classes.Content}>{props.children}</main>
    </>
  );
};

export default Layout;
