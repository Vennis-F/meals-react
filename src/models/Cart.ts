import { Meal } from "./Meal";

export interface CartItemInfor extends Meal {}

export interface CartItem {
  id: string;
  quantity: number;
  amount: number;
  cartItemInfor: CartItemInfor;
}

export interface Cart {
  items: CartItem[];
  totalAmount: number;
}
