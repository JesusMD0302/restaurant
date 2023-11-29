'use client'
import React, { useState } from "react";
import { Card, CardFooter, Image, Button, CardBody } from "@nextui-org/react";
import { BsDot, BsPlus } from "react-icons/bs";
import { LuPencilLine } from "react-icons/lu";
import ModalUpdateFood from "../ModalUpdateFood/ModalUpdateFood";
export interface CardSaucerProps {
  imageUrl: string;
  Price: number;
  Id: number;
  Name: string;
  Description: string;
  Status: string;
  onClick?: () => void;
  onEdit?: () => void;
  /*  setCartModalOpen: React.Dispatch<React.SetStateAction<boolean>>; */
}

const CardUpdateSaucer: React.FC<CardSaucerProps> = ({
  
  imageUrl,
  Price,
  Id,
  Name,
  Description,
  Status,
  onClick,
  onEdit, 
  /*  setCartModalOpen */
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleEditClick = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (

    <Card isFooterBlurred radius="lg" className="border-none bg-transparent">
      <CardBody>
        <Image
          alt="Woman listing to music"
          className="object-cover"
          height={200}
          src="https://img.freepik.com/free-photo/pasta-spaghetti-with-shrimps-sauce_1220-5072.jpg?w=2000&t=st=1678041911~exp=1678042511~hmac=e4aa55e70f8c231d4d23832a611004f86eeb3b6ca067b3fa0c374ac78fe7aba6"
          width={200}
        />
         <h4 className="font-bold text-large text-center"> {Name}</h4>
          <h4 className="font-bold text-large text-green-500 text-center">$ {Price}</h4>
          <h4 className="font-bold text-large text-[#949494] text-center">{Description}</h4>
      </CardBody>
      <CardFooter className="p-0 w-full">
        <Button
          className="w-full rounded-s-none font-semibold rounded-e-none text-base text-[#EA7C69] bg-[#ea7c693d]"
          variant="flat"
          color="default"
          radius="lg"
          size="lg"
          onClick={handleEditClick}
        >
          <LuPencilLine />
          Edit dish
        </Button>
      </CardFooter>
      {isModalOpen && <ModalUpdateFood isOpen={isModalOpen} onClose={handleCloseModal} productId={Id}  />}
    </Card>
  );
};

export default CardUpdateSaucer;
