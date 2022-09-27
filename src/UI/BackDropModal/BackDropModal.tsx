import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import Modal from "../Modal/Modal";

interface BackDropModalProps {
  children: React.ReactNode;
  onClose?: () => void;
}

const BackDropModal = (props: BackDropModalProps) => {
  return (
    <>
      <Backdrop onClick={props.onClose} />
      <Modal>{props.children}</Modal>
    </>
  );
};

export default BackDropModal;
