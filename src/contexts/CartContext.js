import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setTotalPrice(totalPrice + product.price);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);

    const removedProduct = cart.find((item) => item.id === productId);
    if (removedProduct) {
      setTotalPrice(totalPrice - removedProduct.price);
    }
  };

  const value = {
    cart,
    addToCart,
    removeFromCart,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// Create a custom hook to consume the CartContext
export const useCart = () => {
  return useContext(CartContext);
};
