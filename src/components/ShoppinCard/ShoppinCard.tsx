// components/ShoppingCart/ShoppingCart.tsx
import React from "react";
import { useCart } from "../CartContext/CartContext";
import Link from "next/link";
import axios from 'axios'; // Import axios for making HTTP requests

const ShoppingCart: React.FC = () => {
  const { cartFood, cartDrinks, removeFromCart } = useCart();

  const total = Object.values(cartFood).reduce((acc, item) => acc + item.Price * item.quantity, 0);

  const handleRemoveItem = (itemId: number) => {
    removeFromCart(itemId);
  };

  const handleCheckout = () => {
    const token = localStorage.getItem('token');

    if (token) {
      const orderData = {
        CustomerId: 0,  
        BranchStoreId: 1,  
        FoodIds: Object.values(cartFood)
        .map((item) => item.Id),
      DrinkIds: Object.values(cartDrinks)
        .map((item) => item.Id),
      };

      axios.post('http://localhost:5285/api/Cart', orderData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
    } else {
      console.error('Inicia sesion porfavor');
    }
  };

  return (
    
    <div className="p-4 max-w-md mx-auto bg-black rounded-md shadow-md">
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
       <h2 className="text-2xl font-bold mb-4 text-center">Carrito de Compras</h2>
      {Object.keys(cartFood).length === 0 ? (
        <p className="italic text-gray-600">El carrito está vacío</p>
      ) : (
        <div>
          <ul className="divide-y divide-gray-200">
            {Object.values(cartFood).map((item) => (
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
            <button className="bg-blue-500 text-white px-4 py-2 mt-2 ml-4" onClick={handleCheckout}>
              Ir a Pagar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
