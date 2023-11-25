"use client";
import {
  useDisclosure,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import ModalSacuer from "../ModalDescriptionSaucer/ModalSaucer";
import CardAddSaucer from "../CardAddSaucer/CardUpdateSaucer";
import axios from "axios";
import CardSaucer from "../CardSaucer/CardSaucer";
import CardUpdateSaucer from "../CardAddSaucer/CardUpdateSaucer";
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

export default function CardAddSaucerContainer() {
  const [isOpen, setIsOpen] = useState(false);
  const [productId, setProductId] = useState<number | null>(null);
  /*   const { isOpen, onOpen, onClose } = useDisclosure(); */
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
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
    setSelectedCard(card);
    setProductId(card.Id); // establece el ID del producto aquí
    setIsOpen(true); // Abre el modal
  };
  const handleModalClose = () => {
    setSelectedCard(null);
    setIsOpen(false); // Cierra el modal
  };
  
  return (
    <>
      <div className="flex flex-col ">
        {/* <h1 className="py-5 text-2xl">ELIGE LOS PLATILLOS:</h1> */}
        <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 ">
        {data &&
            data.Data.map((card, index) => (
              <CardUpdateSaucer
                key={index}
                {...card}
                imageUrl="https://img.freepik.com/free-photo/pasta-spaghetti-with-shrimps-sauce_1220-5072.jpg?w=2000&t=st=1678041911~exp=1678042511~hmac=e4aa55e70f8c231d4d23832a611004f86eeb3b6ca067b3fa0c374ac78fe7aba6"
                onClick={() => handleCardClick(card)}
              />
            ))}
        </div>
      </div>
      {/* {isOpen && selectedCard !== null && (
        <ModalSacuer
        isOpen={isOpen}
        onClose={handleModalClose}
        selectedCard={selectedCard}
      />
      )} */}
    </>
  );
}
