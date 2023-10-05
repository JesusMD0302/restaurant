// ModalSacuer.js
import React from "react";
import Image from "next/image";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
interface Card {
  imageUrl: string;
  title: string;
  regularPrice: string;
  salePrice: string;
  description: string;
  viewUrl: string;
}
interface ModalSaucerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCard: Card;
}

const ModalSacuer: React.FC<ModalSaucerProps> = ({
  isOpen,
  onClose,
  selectedCard,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} className="bg-[#252836]">
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1 text-center">
          Espaguetis con salsa de gambas
        </ModalHeader>
        <ModalBody>
          <div className="flex items-center justify-center">
            <Image
              src="https://img.freepik.com/free-photo/pasta-spaghetti-with-shrimps-sauce_1220-5072.jpg?w=2000&t=st=1678041911~exp=1678042511~hmac=e4aa55e70f8c231d4d23832a611004f86eeb3b6ca067b3fa0c374ac78fe7aba6"
              alt="Espaguetis con salsa de gambas"
              className="max-h-64 w-auto"
              width={2000} 
              height={1333} 
            />
          </div>
          <div className="flex justify-center items-center">
            <div className="flex items-center mt-2">
              <svg
                className="mx-1 w-5 h-5 fill-current text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <svg
                className="mx-1 w-5 h-5 fill-current text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <svg
                className="mx-1 w-5 h-5 fill-current text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <svg
                className="mx-1 w-5 h-5 fill-current text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <svg
                className="mx-1 w-5 h-5 fill-current text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
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
  );
};

export default ModalSacuer;
