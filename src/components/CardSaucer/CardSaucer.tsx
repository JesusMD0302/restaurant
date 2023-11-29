import React, { useState, useEffect } from "react";
import { Button, CardFooter } from "@nextui-org/react";
import axios from "axios";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
export interface CardSaucerProps {
  imageUrl: string;
  Price: number;
  Id: number;
  Name: string;
  Description: string;
  Status: string;
  onClick?: () => void;
  

  /*  setCartModalOpen: React.Dispatch<React.SetStateAction<boolean>>; */
}

const CardSaucer: React.FC<CardSaucerProps> = ({
  imageUrl,
  Price,
  Id,
  Name,
  Description,
  Status,
  onClick,
 
  /*  setCartModalOpen */
}) => {
  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Evita que el clic se propague al contenedor padre
    onClick && onClick();
  };
  return (
    <>
      <Card className="py-4 bg-[#1F1D2B]">
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={imageUrl}
            width={270}
            onClick={onClick}
          />
          <h4 className="font-bold text-large text-center"> {Name}</h4>
          <h4 className="font-bold text-large text-green-500 text-center">$ {Price}</h4>
          <h4 className="font-bold text-large text-center text-[#949494]">{Description}</h4>
        </CardBody>
        <CardFooter >
          <Button className="text-center  w-full" color="primary" variant="shadow" onClick={handleButtonClick}>
            Añadir al carrito
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default CardSaucer;
