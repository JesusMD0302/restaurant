"use client";

import { checkError } from "@/utils/checkError";
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import {
  StripeCardNumberElementOptions,
  StripeCardElement,
  StripeCardNumberElement,
} from "@stripe/stripe-js";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useCart } from "../CartContext/CartContext";

const defualtOptions = {
  classes: {
    base: "bg-[#2D303E] px-4 py-3 rounded-lg grid content-center",
  },
  style: {
    base: {
      fontSize: "18px",
      color: "#fff",
      iconColor: "#fff",
    },
    empty: {
      color: "#889898",
    },
  },
};

const numberOptions: StripeCardNumberElementOptions = {
  ...defualtOptions,
  showIcon: true,
};

export default function CheckoutForm({
  handlerOnClose,
}: {
  handlerOnClose: () => void;
}) {
  const stripe = useStripe();
  const elements = useElements();
  const { cart, emptyCart } = useCart();

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<null | string>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      const token = localStorage.getItem("token");

      if (!stripe || !elements || cart === null || !token) return;

      setIsLoading(true);
      setMessage(null);

      const customerID = Number(
        JSON.parse(atob(token?.split(".")[1] || "") || "{}").CustomerId
      );

      const {
        data: { Data: ticket },
      } = await axios.post(
        "http://localhost:5285/api/Ticket",
        { BranchStoreId: 1, CartId: cart.Id, CustomerId: customerID },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      const card = elements.getElement(CardNumberElement);

      const { paymentMethod, error } = await stripe.createPaymentMethod({
        type: "card",
        card: card as StripeCardElement | StripeCardNumberElement,
      });

      if (error) {
        if (error.type === "card_error" || error.type === "validation_error") {
          setMessage(error.message ?? "");
        } else {
          setMessage("Ocurrio un error inesperado");
        }
        return;
      }

      const paymentId = paymentMethod.id;

      const paymentInfo = {
        id: `${paymentId}`,
        amount: cart.Total * 100,
      };

      const {
        data: { data: stripePay },
      } = await axios.post("http://localhost:3000/api/checkout", paymentInfo);
      console.log(stripePay);

      const payment = await axios.post(
        "http://localhost:5285/api/Payment/Ticket",
        {
          BranchStoreId: 1,
          TicketId: ticket.Id,
          CustomerId: customerID,
          AmountPay: cart.Total,
          AmountRecieve: stripePay.amount_received,
          CashPayment: false,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log(payment.data);

      elements?.getElement(CardNumberElement)?.clear();
      elements?.getElement(CardCvcElement)?.clear();
      elements?.getElement(CardExpiryElement)?.clear();
      (e.target as HTMLFormElement).reset();

      emptyCart();
      alert("Pago realizado exitosamente");
      handlerOnClose();
    } catch (error) {
      console.warn(error);

      if (error instanceof AxiosError) {
        checkError(
          error.response?.data.data.error as string,
          error.response?.data.data.message as string,
          setMessage
        );

        return;
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      className="w-full max-w-md mx-auto grid gap-2"
      onSubmit={handleSubmit}
    >
      <section className="flex flex-col gap-1">
        <label htmlFor="cardNumber" className="text-white">
          Numero de tarjeta
        </label>
        <CardNumberElement id="cardNumber" options={numberOptions} />
      </section>
      <section className="w-full grid grid-cols-2 gap-2">
        <section className="flex flex-col gap-1">
          <label htmlFor="expDate" className="text-white">
            Fecha de expiración
          </label>
          <CardExpiryElement id="expDate" options={defualtOptions} />
        </section>
        <section className="flex flex-col gap-1">
          <label htmlFor="cvvNumber" className="text-white">
            CVV
          </label>
          <CardCvcElement id="cvvNumber" options={defualtOptions} />
        </section>
      </section>
      <button
        disabled={isLoading || !stripe || !elements}
        type="submit"
        className="bg-[#EA7C69] py-2 rounded-lg text-white text-lg hover:bg-[#a05346]"
      >
        {isLoading ? <div className="loading loading-spinner"></div> : "Pagar"}
      </button>
      {/* Show any error or success messages */}
      {message && <p className="text-lg text-red-600 font-bold">{message}</p>}
    </form>
  );
}
