// CartContext.tsx
import React, { createContext, useContext, useState } from "react";
import { CardSaucerProps } from "../CardSaucer/CardSaucer";

interface Cart {
  Id: number;
  CustomerId: number;
  BranchStoreId: number;
  Status: number;
  StatusName: string;
  Total: number;
}

interface CartContextType {
  cartFood: Record<number, CardSaucerProps & { quantity: number }>;
  cartDrinks: Record<number, CardSaucerProps & { quantity: number }>;
  cart: Cart | null;
  addToCart: (item: CardSaucerProps) => void;
  addDrinkToCart: (item: CardSaucerProps) => void;
  removeFromCart: (itemId: number) => void;
  removeDrinkFromCart: (itemId: number) => void;
  updateCart: (cart: Cart | null) => void;
  emptyCart: () => void;
}

interface CartProviderProps {
  children: React.ReactNode;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartContextType["cartFood"]>({});
  const [cartDrinks, setCartDrinks] = useState<CartContextType["cartDrinks"]>(
    {}
  );
  const [cartId, setCartId] = useState<number | null>(null);
  const [cart, setCart] = useState<Cart | null>(null);

  const addFoodToCart = (item: CardSaucerProps) => {
    setCartItems((prev) => {
      const itemId = item.Id;

      if (prev[itemId]) {
        return {
          ...prev,
          [itemId]: {
            ...item,
            quantity: prev[itemId].quantity + 1,
          },
        };
      } else {
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

  const addDrinkToCart = (item: CardSaucerProps) => {
    setCartDrinks((prev) => {
      const itemId = item.Id;

      if (prev[itemId]) {
        return {
          ...prev,
          [itemId]: {
            ...item,
            quantity: prev[itemId].quantity + 1,
          },
        };
      } else {
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

  const removeFoodFromCart = (itemId: number) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      if (updatedCart[itemId]) {
        updatedCart[itemId].quantity = Math.max(
          0,
          updatedCart[itemId].quantity - 1
        );
        if (updatedCart[itemId].quantity === 0) {
          delete updatedCart[itemId];
        }
      }
      return updatedCart;
    });
  };
  const removeDrinkFromCart = (itemId: number) => {
    setCartDrinks((prev) => {
      const updatedCart = { ...prev };
      if (updatedCart[itemId]) {
        updatedCart[itemId].quantity = Math.max(
          0,
          updatedCart[itemId].quantity - 1
        );
        if (updatedCart[itemId].quantity === 0) {
          delete updatedCart[itemId];
        }
      }
      return updatedCart;
    });
  };

  const updateCart = (newCart: Cart | null) => setCart(newCart);

  const emptyCart = () => {
    updateCart(null);
    setCartItems({});
    setCartDrinks({});
  };

  return (
    <CartContext.Provider
      value={{
        cartFood: cartItems,
        cartDrinks: cartDrinks,
        addToCart: addFoodToCart,
        addDrinkToCart,
        removeFromCart: removeFoodFromCart,
        removeDrinkFromCart,
        cart,
        updateCart,
        emptyCart,
      }}
    >
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
