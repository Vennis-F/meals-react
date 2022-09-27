import React, { useState, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import { Cart, CartItem } from "../models/Cart";
import { Meal } from "../models/Meal";
import CartContext from "./context";

interface CartContextProviderProps {
  children: React.ReactNode;
}
enum ActionKind {
  AddCartItem = "ADD_CART_ITEM",
  RemoveCartItem = "REMOVE_CART_ITEM",
}
interface Action<T> {
  type: ActionKind;
  payload: T;
}

const defaultValue: Cart = {
  items: [],
  totalAmount: 0,
};

const calcTotalAmount = (cart: Cart) =>
  cart.items.reduce(
    (total, currCartItem) =>
      total + currCartItem.quantity * currCartItem.cartItemInfor.price,
    0
  );

const cartReducer = <
  T extends
    | { meal: Meal; quantity: number }
    | { idCartItem: string; quantity: number }
>(
  cart: Cart,
  action: Action<T>
): Cart => {
  const { type, payload } = action;

  if (type === ActionKind.AddCartItem && "meal" in payload) {
    //Update total Amount
    cart.totalAmount += payload.quantity * payload.meal.price;

    const isCartItemExist =
      cart.items.findIndex(
        (cartItem) => cartItem.cartItemInfor.id === payload.meal.id
      ) !== -1;

    //CartItem not exist or items empty
    if (!isCartItemExist) {
      //Add new cart item to items
      const newCartItem: CartItem = {
        id: uuidv4(),
        cartItemInfor: { ...payload.meal },
        quantity: payload.quantity,
        amount: payload.quantity * payload.meal.price,
      };

      cart.items.push(newCartItem);
    } else {
      //Update infor cartItem
      cart.items = cart.items.map((cartItem) => {
        if (cartItem.cartItemInfor.id !== payload.meal.id) return cartItem;
        else {
          return {
            ...cartItem,
            amount: cartItem.amount + payload.quantity * payload.meal.price,
            quantity: cartItem.quantity + payload.quantity,
          };
        }
      });
    }
  } else if (type === ActionKind.RemoveCartItem && "idCartItem" in payload) {
    //quantity === 0
    if (payload.quantity === 0)
      cart.items = cart.items.filter(
        (cartItem) => cartItem.id !== payload.idCartItem
      );
    else {
      //quantity > 0
      cart.items = cart.items.map((cartItem) => {
        if (cartItem.id === payload.idCartItem)
          return {
            ...cartItem,
            amount: payload.quantity * cartItem.cartItemInfor.price,
            quantity: payload.quantity,
          };
        return cartItem;
      });
    }
    //** UPDATE cartitem remove before update total amount
    cart.totalAmount = calcTotalAmount(cart);
  }

  //Update state cart
  return { ...cart };
};

export const CartContextProvider = (props: CartContextProviderProps) => {
  const [cart, dispatchCartAction] = useReducer(cartReducer, defaultValue);

  const addCartItemHandler = (meal: Meal, quantity: number) => {
    dispatchCartAction({
      type: ActionKind.AddCartItem,
      payload: { meal, quantity },
    });
  };

  const removeCartItemHandler = (idCartItem: string, quantity: number) => {
    dispatchCartAction({
      type: ActionKind.RemoveCartItem,
      payload: { idCartItem, quantity },
    });
  };

  const cartContext = {
    cart: cart,
    addCartItem: addCartItemHandler,
    removeCartItem: removeCartItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
