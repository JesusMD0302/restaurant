'use client'
import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

interface ConfirmModalProps {
    isOpen: boolean;
    onConfirm: (productId: number) => void; // Ahora toma un argumento
    onCancel: () => void;
    productId: number; // Nuevo prop para almacenar el productId
  }

  const ConfirmModal: React.FC<ConfirmModalProps> = ({ isOpen, onConfirm, onCancel, productId }) => {
    console.log("productId en ConfirmModal:", productId);
    const handleCancel = () => {
      onCancel();
    };
  
    const handleConfirm = () => {
      onConfirm(productId); // Pasamos el productId al confirmar
    };
  
  return (
    <Modal placement="top-center" isOpen={isOpen} >
      <ModalContent>
        <ModalHeader className="justify-center">Confirmación</ModalHeader>
        <ModalBody className="text-center">
          ¿Estás seguro de que deseas realizar esta acción?
        </ModalBody>
        <ModalFooter className="flex justify-center">
          <Button color="default" onClick={handleCancel}>
            Cancelar
          </Button>
          <Button color="primary" onClick={() => onConfirm(productId)}>
            Confirmar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ConfirmModal;
