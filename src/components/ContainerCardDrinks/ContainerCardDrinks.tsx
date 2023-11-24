"use client";
import CardSaucer from "@/components/CardSaucer/CardSaucer";
import { useDisclosure } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import ModalSacuer from "../ModalDescriptionSaucer/ModalSaucer";
import axios from "axios";

interface Card {
  imageUrl: string;
  Price: number;
  Id: number;
  Name: string;
  Description: string;
  Status: string;
}
interface Data {
  Data: Card[];
}
export default function ContainerCardDrinks() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5285/api/Drink?IsDeleted=false");
        setData(response.data);
      } catch (error) {
        console.error(`Error al hacer la solicitud: ${error}`);
      }
    };

    fetchData();
  }, []);
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
        <h1 className="py-5 text-2xl">ELIGE LAS BEBIDAS:</h1>
        <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 ">
          {data &&
            data.Data.map((card, index) => (
              <CardSaucer
                key={index}
                {...card}
                imageUrl="https://www.conasi.eu/blog/wp-content/uploads/2014/07/zumo-de-sand%C3%ADa-1.jpg"
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
