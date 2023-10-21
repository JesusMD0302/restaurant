import React from "react";
import {Button} from "@nextui-org/react";
interface CardSaucerProps {
  imageUrl: string;
  title: string;
  regularPrice?: string;
  salePrice?: string;
  description?: string;
  viewUrl?: string;
  onClick?: () => void;
  /*  setCartModalOpen: React.Dispatch<React.SetStateAction<boolean>>; */
}

const CardSaucer: React.FC<CardSaucerProps> = ({
  imageUrl,
  title,
  regularPrice,
  salePrice,
  description,
  viewUrl,
  onClick,
  /*  setCartModalOpen */
}) => {
  /* const openOrderModal = () => {
    setCartModalOpen(true);
  }; */

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
          {title}
        </p>
        <div className="flex justify-center">
          {/*  <p className="text-white text-lg mr-2 line-through">{regularPrice}</p> */}
          <p className="text-lg font-bold text-[#0FB478] ">{salePrice}</p>
        </div>
        <p className="text-white text-sm mt-2 text-center">{description}</p>
        <Button className="block mt-4 w-full px-4 py-2 text-center " color="primary" variant="bordered">
        AÑADIR AL CARRITO
      </Button>  
        {/* <a
          target="_blank"
          className="block mt-4 w-full px-4 py-2 font-medium text-white tracking-wide text-center uppercase transition-colors duration-300 bg-[#EA7C69] rounded-lg hover:bg-[#EA7C69] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
        >
          AÑADIR AL CARRITO
        </a> */}
      </div>
    </div>
  );
};

export default CardSaucer;
