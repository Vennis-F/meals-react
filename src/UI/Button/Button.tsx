import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button = (props: ButtonProps) => {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
