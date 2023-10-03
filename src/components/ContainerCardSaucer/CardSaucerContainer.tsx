"use client";
import CardSaucer from "@/components/CardSaucer/CardSaucer";
/* import OptionsTabs from "@/components/Tabs/Optionstabs"; */
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import React, { useState } from "react";
import Image from 'next/image'
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
  return (
    <>
      <div className="flex flex-col ">
        <h1 className="pt-5 text-2xl px-4 ">ELIGE LOS PLATILLOS:</h1>
        <div className=" px-5 grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-8">
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
        <Modal isOpen={isOpen} onClose={onClose} className="bg-[#252836]">
          <ModalContent>
            <ModalHeader className="flex flex-col gap-1">
              Espaguetis con salsa de gambas
            </ModalHeader>
            <ModalBody>
              <div className="flex items-center justify-center">
                <img
                  src="https://img.freepik.com/free-photo/pasta-spaghetti-with-shrimps-sauce_1220-5072.jpg?w=2000&t=st=1678041911~exp=1678042511~hmac=e4aa55e70f8c231d4d23832a611004f86eeb3b6ca067b3fa0c374ac78fe7aba6"
                  alt="Espaguetis con salsa de gambas"
                  className="max-h-64 w-auto"
                />
              </div>
              <div className="flex justify-center items-center">
                <div className="flex items-center mt-2">
                  <svg className="mx-1 w-5 h-5 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                  <svg className="mx-1 w-5 h-5 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                  <svg className="mx-1 w-5 h-5 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                  <svg className="mx-1 w-5 h-5 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                  <svg className="mx-1 w-5 h-5 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                </div>
              </div>
              <p className="mt-3">Descripcion de producto</p>
              <div className="flex justify-between mt-4">
                <p>Precio regular: $700.00</p>
                <p>Precio de venta: $700.00</p>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={onClose}>
                Cerrar
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}
