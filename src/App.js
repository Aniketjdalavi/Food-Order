import React, { useState } from "react";
import Meals from "./components/Meals/Meals";

import Header from "./components/Layout/Header";
import CartProvider from "./store/CartProvider";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsshown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsshown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
