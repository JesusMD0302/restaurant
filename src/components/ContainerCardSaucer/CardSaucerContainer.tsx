"use client";
import CardSaucer from "@/components/CardSaucer/CardSaucer";
/* import OptionsTabs from "@/components/Tabs/Optionstabs"; */
import {
  useDisclosure,
} from "@nextui-org/react";
import React, { useState } from "react";
import Image from 'next/image'
import ModalSacuer from "../ModalDescriptionSaucer/ModalSaucer";
interface Card {
  imageUrl: string;
  title: string;
  regularPrice: string;
  salePrice: string;
  description: string;
  viewUrl: string;
}

export default function CardSaucerContainer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);


  const cardData = [
    {
      imageUrl:
        "https://img.freepik.com/free-photo/pasta-spaghetti-with-shrimps-sauce_1220-5072.jpg?w=2000&t=st=1678041911~exp=1678042511~hmac=e4aa55e70f8c231d4d23832a611004f86eeb3b6ca067b3fa0c374ac78fe7aba6",
      title: "Espaguetis con salsa de gambas ",
      regularPrice: "$700.00",
      salePrice: "$700.00",
      description: "Descripcion de producto",
      viewUrl: "foodiesapp://food/1002",
    },
    {
      imageUrl:
        "https://img.freepik.com/free-photo/pasta-spaghetti-with-shrimps-sauce_1220-5072.jpg?w=2000&t=st=1678041911~exp=1678042511~hmac=e4aa55e70f8c231d4d23832a611004f86eeb3b6ca067b3fa0c374ac78fe7aba6",
      title: "Espaguetis con salsa de gambas ",
      regularPrice: "$700.00",
      salePrice: "$700.00",
      description: "Descripcion de producto",
      viewUrl: "foodiesapp://food/1002",
    },
    {
      imageUrl:
        "https://img.freepik.com/free-photo/pasta-spaghetti-with-shrimps-sauce_1220-5072.jpg?w=2000&t=st=1678041911~exp=1678042511~hmac=e4aa55e70f8c231d4d23832a611004f86eeb3b6ca067b3fa0c374ac78fe7aba6",
      title: "Espaguetis con salsa de gambas ",
      regularPrice: "$700.00",
      salePrice: "$700.00",
      description: "Descripcion de producto",
      viewUrl: "foodiesapp://food/1002",
    },
    {
      imageUrl:
        "https://img.freepik.com/free-photo/pasta-spaghetti-with-shrimps-sauce_1220-5072.jpg?w=2000&t=st=1678041911~exp=1678042511~hmac=e4aa55e70f8c231d4d23832a611004f86eeb3b6ca067b3fa0c374ac78fe7aba6",
      title: "Espaguetis con salsa de gambas ",
      regularPrice: "$700.00",
      salePrice: "$700.00",
      description: "Descripcion de producto",
      viewUrl: "foodiesapp://food/1002",
    },
    {
      imageUrl:
        "https://img.freepik.com/free-photo/pasta-spaghetti-with-shrimps-sauce_1220-5072.jpg?w=2000&t=st=1678041911~exp=1678042511~hmac=e4aa55e70f8c231d4d23832a611004f86eeb3b6ca067b3fa0c374ac78fe7aba6",
      title: "Espaguetis con salsa de gambas ",
      regularPrice: "$700.00",
      salePrice: "$700.00",
      description: "Descripcion de producto",
      viewUrl: "foodiesapp://food/1002",
    },
  ];
  const handleCardClick = (card: Card) => {
    setSelectedCard(card);
    onOpen();
  };

  const handleModalClose = () => {
    setSelectedCard(null);
    onClose();
  };
  return (
    <>
      <div className="flex flex-col ">
        <h1 className="py-5 text-2xl">ELIGE LOS PLATILLOS:</h1>
        <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 ">
          {cardData.map((card, index) => (
            <CardSaucer
              key={index}
              {...card}
              onClick={() => handleCardClick(card)}
            />
          ))}
        </div>
      </div>
      {isOpen && selectedCard !== null && (
        <ModalSacuer
        isOpen={isOpen}
        onClose={handleModalClose}
        selectedCard={selectedCard}
      />
      )}
    </>
  );
}
