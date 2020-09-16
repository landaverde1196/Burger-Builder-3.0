import React from "react";
import Aux from "../Aux/Aux";
import classes from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";

import { checkIsAuthenticated } from "../../selectors";
import { useSelector } from "react-redux";

const Layout = (props) => {
  const isAuthenticated = useSelector(checkIsAuthenticated);
  return (
    <Aux>
      <Toolbar isAuth={isAuthenticated} />

      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
};

export default Layout;
