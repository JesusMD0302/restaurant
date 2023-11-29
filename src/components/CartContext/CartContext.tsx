// CartContext.tsx
import React, { createContext, useContext, useState } from "react";
import { CardSaucerProps } from "../CardSaucer/CardSaucer";

interface CartContextType {
  cartItems: Record<number, CardSaucerProps & { quantity: number }>;
  addToCart: (item: CardSaucerProps) => void;
  removeFromCart: (itemId: number) => void;
}

interface CartProviderProps {
  children: React.ReactNode;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartContextType["cartItems"]>({});

  const addToCart = (item: CardSaucerProps) => {
    setCartItems((prev) => {
      const itemId = item.Id;

      if (prev[itemId]) {
        // Si el elemento ya existe en el carrito, incrementa la cantidad
        return {
          ...prev,
          [itemId]: {
            ...item,
            quantity: prev[itemId].quantity + 1,
          },
        };
      } else {
        // Si el elemento no existe en el carrito, añádelo con cantidad 1
        return {
          ...prev,
          [itemId]: {
            ...item,
            quantity: 1,
          },
        };
      }
    });
  };

  const removeFromCart = (itemId: number) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      if (updatedCart[itemId]) {
        // Si el elemento existe en el carrito, reduce la cantidad
        updatedCart[itemId].quantity = Math.max(0, updatedCart[itemId].quantity - 1);
        // Si la cantidad llega a 0, elimina el elemento del carrito
        if (updatedCart[itemId].quantity === 0) {
          delete updatedCart[itemId];
        }
      }
      return updatedCart;
    });
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
