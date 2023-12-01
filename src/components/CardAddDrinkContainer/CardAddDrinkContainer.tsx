"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import CardUpdateDrink from "../CardUpdateDrink/CardUpdateDrink";
interface Card {
  imageUrl: "https://www.conasi.eu/blog/wp-content/uploads/2014/07/zumo-de-sand%C3%ADa-1.jpg";
  Price: number;
  Id: number;
  Name: string;
  Description: string;
  Status: string;
}
interface Data {
  Data: Card[];
}

export default function CardAddDrinkContainer() {
  const [isOpen, setIsOpen] = useState(false);
  const [productId, setProductId] = useState<number | null>(null);
  /*   const { isOpen, onOpen, onClose } = useDisclosure(); */
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5285/api/Drink?IsDeleted=false"
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
              <CardUpdateDrink
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
