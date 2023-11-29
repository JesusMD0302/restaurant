// components/ShoppingCart/ShoppingCart.tsx
import React from "react";
import { useCart } from "../CartContext/CartContext";
import Link from "next/link";

const ShoppingCart: React.FC = () => {
  const { cartItems, removeFromCart } = useCart();

  // Calcular el total de la compra
  const total = Object.values(cartItems).reduce((acc, item) => acc + item.Price * item.quantity, 0);

  const handleRemoveItem = (itemId: number) => {
    removeFromCart(itemId);
  };

  return (
    <div className="p-4 max-w-md m-9 mx-auto bg-black rounded-md shadow-md">
      <div className="flex items-center mb-4">
        <Link className="text-white" href="/">
          {/* SVG de flecha izquierda */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Regresar
        </Link>
      </div>
      <h2 className="text-2xl text-center font-bold mb-4">Carrito de Compras</h2>
      {Object.keys(cartItems).length === 0 ? (
        <p className="italic text-gray-600">El carrito está vacío</p>
      ) : (
        <div>
          <ul className="divide-y divide-gray-200">
            {Object.values(cartItems).map((item) => (
              <li key={item.Id} className="py-2">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-semibold">
                      {item.Name} ({item.quantity})
                    </p>
                    <p className="text-gray-600">${item.Price}</p>
                  </div>
                  <button
                    onClick={() => handleRemoveItem(item.Id)}
                    className="text-red-500"
                  >
                    {/* Reemplazar "Eliminar" con el SVG */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex justify-end mt-4">
            <div className="text-xl font-bold">Total: ${total}</div>
            <button className="bg-blue-500 text-white px-4 py-2 mt-2 ml-4">
              Ir a Pagar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
