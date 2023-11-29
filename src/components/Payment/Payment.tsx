import React from 'react';
import { useCart } from '../CartContext/CartContext';
import axios from 'axios';

const ShoppingCart: React.FC = () => {
  const { cartItems } = useCart();

  const handlePayment = async () => {
    try {
      // Obtén el CustomerId del Local Storage
      const customerIdFromLocalStorage = localStorage.getItem('customerId');
      const customerId = customerIdFromLocalStorage ? parseInt(customerIdFromLocalStorage, 10) : 0;

      // Filtra los productos en alimentos y bebidas
      const foodItems = cartItems.filter((item) => item.Type === 'food');
      const drinkItems = cartItems.filter((item) => item.Type === 'drink');

      // Construye el objeto de datos a enviar al backend
      const paymentData = {
        CustomerId: customerId,
        BranchStoreId: 1, // Reemplaza con el identificador real de la tienda
        FoodIds: foodItems.map((food) => food.Id),
        DrinkIds: drinkItems.map((drink) => drink.Id),
      };

      const response = await axios.post('http://localhost:3001/api/payment', paymentData);

      if (response.data.success) {
        console.log('Pago exitoso:', response.data.message);
        // Realiza acciones adicionales si el pago fue exitoso
      } else {
        console.error('Error en el pago:', response.data.message);
        // Maneja el error según sea necesario
      }
    } catch (error) {
      console.error('Error al procesar el pago:', error.message);
    }
  };

  return (
    <div>
      {/* Resto del código del carrito */}
      <button onClick={handlePayment}>Pagar</button>
    </div>
  );
};

export default ShoppingCart;
