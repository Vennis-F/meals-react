import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../../store/context";
import Button from "../../../UI/Button/Button";
import CartIcon from "../../Cart/CartIcon/CartIcon";
import classes from "./HeaderCartButton.module.css";

interface HeaderCartButtonProps {
  onShowCartModal: () => void;
}

const HeaderCartButton = (props: HeaderCartButtonProps) => {
  const { cart } = useContext(CartContext);
  const [showHighligh, setShowHighligh] = useState(false);

  console.log("Cart button render");

  const btnClasses = `${classes["button"]} ${showHighligh ? classes.bump : ""}`;

  useEffect(() => {
    if (cart.items.length === 0) return;

    setShowHighligh(true);

    const timer = setTimeout(() => {
      setShowHighligh(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [cart]);

  return (
    <Button className={btnClasses} onClick={props.onShowCartModal}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>{cart.items.length}</span>
    </Button>
  );
};

export default HeaderCartButton;
