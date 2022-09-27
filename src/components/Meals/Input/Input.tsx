import React, { InputHTMLAttributes, RefObject } from "react";
import classes from "./Input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  refInput: RefObject<HTMLInputElement>;
}

const Input = ({ label, refInput, ...rest }: InputProps) => {
  return (
    <div className={classes.input}>
      <label htmlFor={rest.id}>{label}</label>
      <input {...rest} ref={refInput} />
    </div>
  );
};

export default Input;
