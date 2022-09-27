import React, { useContext } from "react";
import { CartItem } from "../../../models/Cart";
import CartContext from "../../../store/context";
import Button from "../../../UI/Button/Button";
import classes from "./CartItem.module.css";

interface CartItemProps {
  cartItem: CartItem;
}

const CartItems = (props: CartItemProps) => {
  const ctx = useContext(CartContext);

  const price = `$${props.cartItem.cartItemInfor.price.toFixed(2)}`;

  const onAdd = () => {
    ctx.addCartItem(props.cartItem.cartItemInfor, 1);
  };

  const onRemove = () => {
    ctx.removeCartItem(props.cartItem.id, props.cartItem.quantity - 1);
  };

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.cartItem.cartItemInfor.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.cartItem.quantity}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <Button onClick={onRemove}>−</Button>
        <Button onClick={onAdd}>+</Button>
      </div>
    </li>
  );
};

export default CartItems;
