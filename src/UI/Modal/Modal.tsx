import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

interface ModalProps {
  children: React.ReactNode;
}

const Modal = (props: ModalProps) => {
  return ReactDOM.createPortal(
    <div className={classes.modal}>{props.children}</div>,
    document.querySelector("#overlay-root")!
  );
};

export default Modal;
