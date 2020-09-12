import React from "react";
import Burger from "../../Burger/Burger";
import classes from "./CheckoutSummary.module.css";
import { Button } from "react-bootstrap";

const checkoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope it tastes well!</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button
        className={classes.Button}
        variant="outline-danger"
        onClick={props.checkoutCancelled}
      >
        CANCEL
      </Button>
      <Button
        className={classes.Button}
        variant="outline-success"
        onClick={props.checkoutContinued}
      >
        CONTINUE
      </Button>
    </div>
  );
};

export default checkoutSummary;
