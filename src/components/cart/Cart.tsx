import React from "react";
import { CardSaucerProps } from "../CardSaucer/CardSaucer";
interface CartProps {
  cart: CardSaucerProps[];
  onClose: () => void;
  removeFromCart: (item: CardSaucerProps) => void;
}

const Cart: React.FC<CartProps> = ({ cart, onClose, removeFromCart }) => {
  return (
    <div className="cart-container">
      <h2 className="text-2xl">Carrito de Compras</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.title} - {item.salePrice}
            <button onClick={() => removeFromCart(item)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <button onClick={onClose}>Cerrar Carrito</button>
    </div>
  );
};

export default Cart;
