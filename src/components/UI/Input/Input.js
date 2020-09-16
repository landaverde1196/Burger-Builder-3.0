import React from "react";
import classes from "./Input.module.css";

import { Form } from "react-bootstrap";

const input = (props) => {
  let inputElement = null;
  const inputClasses = [classes.InputElement];

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(classes.Invalid);
  }

  switch (props.elementType) {
    case "input":
      inputElement = (
        <>
          <Form.Label>{props.elementConfig.placeholder}</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={props.changed}
            value={props.value}
            {...props.elementConfig}
            className={inputClasses.join(" ")}
          />
        </>
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={classes.InputElement}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "select":
      inputElement = (
        <Form.Control
          as="select"
          className={classes.InputElement}
          value={props.value}
          onChange={props.changed}
        >
          {props.elementConfig.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </Form.Control>
      );
      break;
    default:
      inputElement = (
        <>
          <Form.Label>{props.elementConfig.placeholder}</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={props.changed}
            value={props.value}
            {...props.elementConfig}
            className={inputClasses.join(" ")}
          />
        </>
      );
  }

  let validationError = null;
  if (props.invalid && props.touched) {
    validationError = (
      <p className={classes.ValidationError}>{props.errorMessage}</p>
    );
  }

  return (
    <div className={classes.Input}>
      {inputElement}
      {validationError}
    </div>
  );
};

export default input;
