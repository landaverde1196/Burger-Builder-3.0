import React from "react";
// import classes from "./Modal.module.css";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Backdrop from "../Backdrop/Backdrop";

const ModalComponent = (props) => (
  <>
    <Backdrop show={props.show} clicked={props.modalClosed} />

    <Modal show={props.show} onHide={props.modalClosed}>
      <Modal.Header closeButton>
        <Modal.Title>Your Order</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.children}</Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={props.purchaseCancelled}>
          Close
        </Button>
        <Button variant="outline-success" onClick={props.purchaseContinued}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  </>
);
export default ModalComponent;
