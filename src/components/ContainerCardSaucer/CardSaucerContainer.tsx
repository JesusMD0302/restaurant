"use client";
import CardSaucer from "@/components/CardSaucer/CardSaucer";
import React, { useEffect, useState } from "react";
import ModalSacuer from "../ModalDescriptionSaucer/ModalSaucer";
import axios from "axios";
import { useCart } from "../CartContext/CartContext";
interface Card {
  imageUrl: "https://img.freepik.com/free-photo/pasta-spaghetti-with-shrimps-sauce_1220-5072.jpg?w=2000&t=st=1678041911~exp=1678042511~hmac=e4aa55e70f8c231d4d23832a611004f86eeb3b6ca067b3fa0c374ac78fe7aba6";
  Price: number;
  Id: number;
  Name: string;
  Description: string;
  Status: string;
}
interface Data {
  Data: Card[];
}
export default function CardSaucerContainer() {
  const [isOpen, setIsOpen] = useState(false);
  const [productId, setProductId] = useState<number | null>(null);
  /*   const { isOpen, onOpen, onClose } = useDisclosure(); */
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const { addToCart } = useCart();
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5285/api/Food?IsDeleted=false"
        );

        setData(response.data);
      } catch (error) {
        console.error(`Error al hacer la solicitud: ${error}`);
      }
    };

    fetchData();
  }, []);

  const handleCardClick = (card: Card) => {
    addToCart({
      ...card,
      imageUrl:
        "https://www.conasi.eu/blog/wp-content/uploads/2014/07/zumo-de-sand%C3%ADa-1.jpg",
      quantity: 0,
      Type: "", // Add the missing 'Type' property here
    });
    setSelectedCard(card);
    setProductId(card.Id); // Set the ID of the product here
    setIsOpen(true); // Open the modal
  };

  const handleModalClose = () => {
    setSelectedCard(null);
    setIsOpen(false); // Close the modal
  };

  setSelectedCard(null);
  setIsOpen(false); // Cierra el modal
  return (
    <>
      <div className="flex flex-col ">
        <h1 className="py-5 text-2xl">ELIGE LOS PLATILLOS:</h1>
        <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 ">
          {data &&
            data.Data.map((card, index) => (
              <CardSaucer
                quantity={0} Type={""} key={index}
                {...card}
                imageUrl="https://img.freepik.com/free-photo/pasta-spaghetti-with-shrimps-sauce_1220-5072.jpg?w=2000&t=st=1678041911~exp=1678042511~hmac=e4aa55e70f8c231d4d23832a611004f86eeb3b6ca067b3fa0c374ac78fe7aba6"
                onClick={() => handleCardClick(card)}              />
            ))}
        </div>
      </div>
      {isOpen && selectedCard !== null && (
        <ModalSacuer
          isOpen={isOpen}
          onClose={handleModalClose}
          selectedCard={selectedCard}
          productId={productId}
        />
      )}
    </>
  );
}
