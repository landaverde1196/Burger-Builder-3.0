import React from "react";
import classes from "./BuildControl.module.css";
import { Button } from "react-bootstrap";

const buildControl = (props) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <Button
      className={classes.Less}
      onClick={props.removed}
      disabled={props.disabled}
    >
      Less
    </Button>
    <Button className={classes.More} onClick={props.added}>
      More
    </Button>
  </div>
);

export default buildControl;
