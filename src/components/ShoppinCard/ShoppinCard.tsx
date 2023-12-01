// components/ShoppingCart/ShoppingCart.tsx
import React, { useState } from "react";
import { useCart } from "../CartContext/CartContext";
import Link from "next/link";
import axios from "axios"; // Import axios for making HTTP requests
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";

import CheckoutForm from "@/components/CheckoutForm/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51OFqy6G5vLVbLYUKl1jIzbcad2PRIoGo40Hu3nbVAW5XYXT8wr81TkMi0gVx3C7DW0e38OG4LuaZB3IYBAjP7abJ00Uq8VaQDx"
);

const ShoppingCart: React.FC = () => {
  const {
    cartFood,
    cartDrinks,
    cart,
    removeFromCart,
    removeDrinkFromCart,
    updateCart,
  } = useCart();

  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

  const total =
    Object.values(cartFood).reduce(
      (acc, item) => acc + item.Price * item.quantity,
      0
    ) +
    Object.values(cartDrinks).reduce(
      (acc, item) => acc + item.Price * item.quantity,
      0
    );

  const handleRemoveItem = (itemId: number) => {
    removeFromCart(itemId);
  };
  const handleRemoveDrink = (itemId: number) => {
    removeDrinkFromCart(itemId);
  };

  const handleCheckout = () => {
    const token = localStorage.getItem("token");

    if (token) {
      const payload = JSON.parse(atob(token?.split(".")[1] || "") || "{}");

      if (total <= 0) {
        alert("No hay ningún articulo en el carrito");
        return;
      }

      const orderData = {
        CustomerId: payload.CustomerId,
        BranchStoreId: 1,
        FoodIds: Object.values(cartFood).flatMap((item) =>
          Array.from({ length: item.quantity }, () => item.Id)
        ),
        DrinkIds: Object.values(cartDrinks).flatMap((item) =>
          Array.from({ length: item.quantity }, () => item.Id)
        ),
      };
      // console.log(orderData);

      if (cart === null) {
        axios
          .post("http://localhost:5285/api/Cart", orderData, {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
            updateCart(response.data.CartResponse.Data);
          })
          .catch((error) => {
            console.error(error);
          });
      }

      onOpen();
    } else {
      console.error("Inicia sesion porfavor");
    }
  };

  return (
    <article className="p-4">
      <div className="p-4 max-w-4xl mx-auto bg-[#1f1d2b] rounded-md shadow-md">
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
        <article className="grid md:grid-cols-[3fr_2fr] gap-4 relative">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-center">
              Carrito de Compras
            </h2>
            {Object.keys(cartFood).length === 0 &&
            Object.keys(cartDrinks).length === 0 ? (
              <p className="italic text-gray-600">El carrito está vacío</p>
            ) : (
              <div>
                <ul className="[&_li]:mt-4">
                  {Object.values(cartFood).map((item) => (
                    <li key={item.Id} className="p-4 rounded-lg bg-[#141220]">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-lg font-semibold">
                            {item.Name} ({item.quantity})
                          </p>
                          <p className="text-gray-600">Precio: ${item.Price}</p>
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
                  {Object.values(cartDrinks).map((item) => (
                    <li key={item.Id} className="p-4 rounded-lg bg-[#141220]">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-lg font-semibold">
                            {item.Name} ({item.quantity})
                          </p>
                          <p className="text-gray-600">Precio: ${item.Price}</p>
                        </div>
                        <button
                          onClick={() => handleRemoveDrink(item.Id)}
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
              </div>
            )}
          </section>
          <section className="sticky bottom-0 shadow-[0px_-15px_5px_0px_#1f1d2b] md:shadow-none md:top-10 right-0 h-min p-4 rounded-lg bg-[#141220]">
            <div className="flex flex-col items-center gap-2">
              <h2 className="text-2xl font-bold mb-4 text-center">
                Resumen de pago
              </h2>
              <section className="w-full divide-y-2 divide-white">
                <ul>
                  {Object.values(cartFood).map((food) => (
                    <div className="flex justify-between" key={food.Id}>
                      <p>{food.Name}</p>
                      <p className="text-gray-300">
                        Total: ${food.Price * food.quantity}
                      </p>
                    </div>
                  ))}
                  {Object.values(cartDrinks).map((drink) => (
                    <div className="flex justify-between" key={drink.Id}>
                      <p>{drink.Name}</p>
                      <p className="text-gray-300">
                        Total: ${drink.Price * drink.quantity}
                      </p>
                    </div>
                  ))}
                </ul>
                <p className="mt-2 text-lg font-bold flex justify-between">
                  <span>Total:</span>
                  <span>${total}</span>
                </p>
              </section>
              <button
                className="w-full bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg"
                onClick={handleCheckout}
              >
                Ir a Pagar
              </button>
            </div>
          </section>
        </article>
      </div>
      <ModalPayment
        isOpen={isOpen}
        handlerOnClose={onClose}
        handlerOnOpenChange={onOpenChange}
      />
    </article>
  );
};

const ModalPayment = ({
  isOpen = false,
  handlerOnOpenChange,
  handlerOnClose,
}: {
  isOpen: boolean;
  handlerOnOpenChange: () => void;
  handlerOnClose: () => void;
}) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={handlerOnOpenChange}>
      <ModalContent className="p-4">
        {(onClose) => (
          <>
            <ModalHeader>Tarjeta</ModalHeader>
            <ModalBody>
              <Elements stripe={stripePromise}>
                <CheckoutForm handlerOnClose={handlerOnClose} />
              </Elements>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ShoppingCart;
