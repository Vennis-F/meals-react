import React, { useState, useContext, useRef } from "react";
import { Meal } from "../../../models/Meal";
import CartContext from "../../../store/context";
import Input from "../Input/Input";
import classes from "./MealItemForm.module.css";

interface MealItemFormProps {
  item: Meal;
}
const MealItemForm = (props: MealItemFormProps) => {
  const quantityInputRef = useRef<HTMLInputElement>(null);
  const ctx = useContext(CartContext);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    //Update cartitem
    ctx.addCartItem(props.item, +quantityInputRef.current!.value);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label={props.item.name}
        id={props.item.id}
        type="number"
        defaultValue="1"
        min={1}
        max={5}
        step={1}
        refInput={quantityInputRef}
      />
      <button className={classes.button}>+ Add to card</button>
    </form>
  );
};

export default MealItemForm;
