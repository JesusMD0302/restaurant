// components/ShoppingCart/ShoppingCart.tsx
import React from "react";
import { useCart } from "../CartContext/CartContext";

const ShoppingCart: React.FC = () => {
  const { cartItems, removeFromCart } = useCart();

  // Calcular el total de la compra
  const total = cartItems.reduce((acc, item) => acc + item.Price, 0);

  const handleRemoveItem = (itemId: number) => {
    removeFromCart(itemId);
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-black rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p className="italic text-gray-600">El carrito está vacío</p>
      ) : (
        <div>
          <ul className="divide-y divide-gray-200">
            {cartItems.map((item, index) => (
              <li key={index} className="py-2">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-semibold">{item.Name}</p>
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
