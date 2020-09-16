import React from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

const ModalComponent = (props) => (
  <>
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
