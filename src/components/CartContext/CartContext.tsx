// CartContext.tsx
import React, { createContext, useContext, useState } from "react";
import { CardSaucerProps } from "../CardSaucer/CardSaucer";
interface CartContextType {
  cartItems: CardSaucerProps[];
  addToCart: (item: CardSaucerProps) => void;
  removeFromCart: (itemId: number) => void;
}

interface CartProviderProps {
  children: React.ReactNode;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CardSaucerProps[]>([]);

  const addToCart = (item: CardSaucerProps) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (itemId: number) => {
    setCartItems(cartItems.filter((item) => item.Id !== itemId));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
