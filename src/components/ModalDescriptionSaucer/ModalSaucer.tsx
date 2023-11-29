// ModalSacuer.js
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import axios from "axios";
interface ProductData {
  Price: number;
  Category: Array<{
    ProductType: number;
    ProductTypeName: string;
    Id: number;
    Name: string;
    Description: string;
    Status: string;
  }>;
  Id: number;
  Name: string;
  Description: string;
  Status: string;
}

interface Card {
  Price: number;
  Id: number;
  Name: string;
  Description: string;
  Status: string;
}

interface ModalSaucerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCard: Card;
  productId: number | null;
}

const ModalSacuer: React.FC<ModalSaucerProps> = ({
  isOpen,
  onClose,
  selectedCard,
}) => {
  const [productData, setProductData] = useState<ProductData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5285/api/Food/${selectedCard.Id}`
        );
        console.log(response.data);
        setProductData(response.data.Data);
      } catch (error) {
        console.error(`Error al hacer la solicitud: ${error}`);
      }
    };

    if (selectedCard) {
      fetchData();
    }
  }, [selectedCard]);
  return (
    <Modal isOpen={isOpen} onClose={onClose} className="bg-[#252836]">
      {productData && (
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1 text-center">
            {productData.Name}
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
                </svg> <svg
                  className="mx-1 w-5 h-5 fill-current text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg> <svg
                  className="mx-1 w-5 h-5 fill-current text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              </div>
            </div>
            <p className="mt-3">{productData.Description}</p>
            <div className="flex justify-between mt-4">
              <p>Precio: ${productData.Price}</p>
              <p>Estado: {productData.Status}</p>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={onClose}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      )}
    </Modal>
  );
};

export default ModalSacuer;

