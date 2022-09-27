import React from "react";
import { Meal } from "../../../models/Meal";
import MealItemForm from "../MealItemForm/MealItemForm";
import classes from "./MealItem.module.css";

interface MealItemProps {
  item: Meal;
}

const MealItem = (props: MealItemProps) => {
  const price = `$${props.item.price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div className="meal-item-infor">
        <h3>{props.item.name}</h3>
        <div className={classes.description}>{props.item.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <MealItemForm item={props.item} />
    </li>
  );
};

export default MealItem;
