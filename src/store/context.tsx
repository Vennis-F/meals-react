import React from "react";
import { Cart } from "../models/Cart";
import { Meal } from "../models/Meal";

const defaultValue: Cart = {
  items: [],
  totalAmount: 0,
};

const CartContext = React.createContext({
  cart: defaultValue,
  addCartItem: (meal: Meal, quantity: number) => {},
  removeCartItem: (idCartItem: string, quantity: number) => {},
});

export default CartContext;
