import React from "react";
import ReactDOM from "react-dom";
import classes from "./Backdrop.module.css";

interface BackdropProps {
  onClick?: () => void;
}

const Backdrop = (props: BackdropProps) => {
  return ReactDOM.createPortal(
    <div onClick={props.onClick} className={classes.backdrop}></div>,
    document.querySelector("#backdrop-root")!
  );
};
export default Backdrop;
