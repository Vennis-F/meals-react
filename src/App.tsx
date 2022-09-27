import { useState } from "react";
import Cart from "./components/Cart/Cart/Cart";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals/Meals";

function App() {
  const [showCart, setShowCart] = useState(false);

  const toggleCartModalHandler = () => {
    setShowCart((showCart) => !showCart);
  };

  console.log("App render!");

  return (
    <>
      <div>Anh yêu em</div>
      {showCart && <Cart onClose={toggleCartModalHandler} />}
      <Header onShowCart={toggleCartModalHandler} />
      <Meals />
    </>
  );
}

export default App;
