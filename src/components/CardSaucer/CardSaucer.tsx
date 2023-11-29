import React, { useState, useEffect } from "react";
import {Button} from "@nextui-org/react";
import axios from "axios";
import { useCart } from "../CartContext/CartContext";

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
    <div className="hover:transform hover:scale-105 duration-300  max-w-sm w-auto mx-auto bg-[#1F1D2B] rounded-3xl shadow-xl overflow-hidden">
      <div
        className="h-[236px]"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        onClick={onClick}
      ></div>
      <div className="p-4 sm:p-6 justify-center">
        <p className="font-bold text-white text-lg leading-7 mb-1 text-center">
          {Name}
        </p>
        <div className="flex justify-center">
          <p className="text-lg font-bold text-[#0FB478] ">Precio: $ {Price}</p>
        </div>
        <p className="text-white text-sm mt-2 text-center">Descripcion:{Description}</p>
        <div>
        
        <Button
          className="block mt-4 w-full px-4 py-2 text-center "
          color="primary"
          variant="bordered"
          onClick={handleButtonClick} // Usa la nueva función de clic del botón
        >
          AÑADIR AL CARRITO
        </Button>  
      </div>
      
      </div>
    </div>
  );
};

export default CardSaucer;
