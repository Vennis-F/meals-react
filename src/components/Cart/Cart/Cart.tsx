import React, { useContext } from "react";
import ReactDOM from "react-dom";
import CartContext from "../../../store/context";
import BackDropModal from "../../../UI/BackDropModal/BackDropModal";
import Button from "../../../UI/Button/Button";
import CartItems from "../CartItem/CartItem";
import classes from "./Cart.module.css";

interface CartProps {
  onClose: () => void;
}

const Cart = (props: CartProps) => {
  const { cart } = useContext(CartContext);

  const totalAmount = `$${cart.totalAmount.toFixed(2)}`;

  const cartItems = cart.items.map((cartItem) => (
    <CartItems key={cartItem.id} cartItem={cartItem} />
  ));

  return (
    <BackDropModal onClose={props.onClose}>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes["total"]}>
        <h3>Total Amount</h3>
        <h3>{totalAmount}</h3>
      </div>
      <div className={classes["actions"]}>
        <Button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </Button>
        {cart.items.length > 0 && <Button>Order</Button>}
      </div>
    </BackDropModal>
  );
};

export default Cart;
