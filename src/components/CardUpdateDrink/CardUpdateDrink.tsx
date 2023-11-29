'use client'
import React, { useState } from "react";
import { Card, CardFooter, Image, Button, CardBody } from "@nextui-org/react";
import { LuPencilLine, LuTrash } from "react-icons/lu";
import ModalUpdateDrink from "../ModalUpdateDrink/ModalUpdateDrink";
import axios from "axios";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
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

const CardUpdateDrink: React.FC<CardSaucerProps> = ({
  
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
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false); 
  const handleEditClick = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleDeleteClick = () => {
    console.log("Id al hacer clic en eliminar:", Id);
    setIsConfirmModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    try {
      await axios.delete(`http://localhost:5285/api/Drink/${Id}`, { headers });
    } catch (error) {
      console.error(`Error al eliminar la bebida: ${error}`);
    } finally {
      setIsConfirmModalOpen(false);
    }
  };

  const handleCancelDelete = () => {
    setIsConfirmModalOpen(false);
  };

  return (

    <Card isFooterBlurred radius="lg" className="border-none bg-transparent">
      <CardBody>
        <Image
          alt="Woman listing to music"
          className="object-cover"
          height={200}
          src="https://www.conasi.eu/blog/wp-content/uploads/2014/07/zumo-de-sand%C3%ADa-1.jpg"
          width={200}
        />
         <h4 className="font-bold text-large text-center"> {Name}</h4>
          <h4 className="font-bold text-large text-green-500 text-center">$ {Price}</h4>
          <h4 className="font-bold text-large text-[#949494] text-center">{Description}</h4>
      </CardBody>
      <CardFooter className="p-0 w-full ">
        <div className="w-full flex">
          <Button
            className="w-3/4 rounded-s-none font-semibold rounded-e-none text-base text-[#EA7C69] bg-[#ea7c693d]"
            variant="flat"
            color="default"
            radius="lg"
            size="lg"
            onClick={handleEditClick}
          >
            <LuPencilLine />
            Editar Bebida
          </Button>
          <div className="w-1/4 bg-[#fa151550] p-2">
            <LuTrash
              className="text-2xl cursor-pointer m-auto my-1 text-white"
              onClick={handleDeleteClick}
            />
          </div>
        </div>
      </CardFooter>
      {isModalOpen && <ModalUpdateDrink isOpen={isModalOpen} onClose={handleCloseModal} productId={Id}   />}
      {isConfirmModalOpen && (
        <ConfirmModal
        isOpen={isConfirmModalOpen}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
        productId={Id}
        />
      )}
    </Card>
  );
};

export default CardUpdateDrink;
