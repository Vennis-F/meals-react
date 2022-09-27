import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CartContextProvider } from "./store/CartProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <CartContextProvider>
    <App />
  </CartContextProvider>
);
