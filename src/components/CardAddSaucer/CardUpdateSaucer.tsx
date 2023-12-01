"use client";
import React, { useState } from "react";
import { Card, CardFooter, Image, Button, CardBody } from "@nextui-org/react";
import ModalUpdateFood from "../ModalUpdateFood/ModalUpdateFood";
import axios from "axios";
import { LuPencilLine, LuTrash } from "react-icons/lu";
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
      await axios.delete(`http://localhost:5285/api/Food/${Id}`, { headers });
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
          src="https://img.freepik.com/free-photo/pasta-spaghetti-with-shrimps-sauce_1220-5072.jpg?w=2000&t=st=1678041911~exp=1678042511~hmac=e4aa55e70f8c231d4d23832a611004f86eeb3b6ca067b3fa0c374ac78fe7aba6"
          width={200}
        />
        <h4 className="font-bold text-large text-center"> {Name}</h4>
        <h4 className="font-bold text-large text-green-500 text-center">
          $ {Price}
        </h4>
        <h4 className="font-bold text-large text-[#949494] text-center">
          {Description}
        </h4>
      </CardBody>
      <CardFooter className="p-0 w-full ">
        <div className="w-full flex">
          <Button
            className="w-3/4 rounded-s-none font-semibold rounded-e-none text-base text-blue-400 bg-[#69d7ea3d]"
            variant="flat"
            color="default"
            radius="lg"
            size="lg"
            onClick={handleEditClick}
          >
            <LuPencilLine className="text-3xl" />
            Editar Comida
          </Button>
          <div className="w-1/4 bg-[#fa151550] p-2">
            <LuTrash
              className="text-2xl cursor-pointer m-auto my-1 text-white"
              onClick={handleDeleteClick}
            />
          </div>
        </div>
      </CardFooter>

      {isModalOpen && (
        <ModalUpdateFood
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          productId={Id}
        />
      )}
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

export default CardUpdateSaucer;
