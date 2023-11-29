"use client";
import React, { useCallback, useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import { BsCurrencyDollar } from "react-icons/bs";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import axios from "axios";
interface Card {
  Price: number;
  Id: number;
  Name: string;
  Description: string;
  Status: string;
  Category: Array<{
    ProductType: number;
    ProductTypeName: string;
    Id: number;
    Name: string;
    Description: string;
    Status: string;
  }>;
}

interface Data {
  Data: Card[];
}
const ModalUpdateFood = ({
  isOpen,
  onClose,
  productId,
}: {
  isOpen: boolean;
  productId: number;
  onClose: () => void;
}) => {
  const [data, setData] = useState<Card | null>(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(
        "http://localhost:5285/api/Food/" + productId
      );

      setData(response.data.Data);
      console.log(response.data);
    } catch (error) {
      console.error(`Error al hacer la solicitud: ${error}`);
    }
  }, [productId]);

  useEffect(() => {
    fetchData();
  }, [productId, fetchData]);

  useEffect(() => {
    if (data) {
      setName(data.Name);
      setDescription(data.Description);
      setPrice(data.Price);
    }
  }, [data]);
  const handleSubmit = async () => {
    const token = localStorage.getItem("token");
    const data = {
      Name: name,
      Description: description,
      Price: price,
      CategoryIds: [1],
    };
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    try {
      const response = await axios.put(
        "http://localhost:5285/api/Food/" + productId,
        data,
        { headers }
      );
     /*  console.log(response.data); */
      fetchData();
      onClose();
      setOpen(true);
    } catch (error) {
      setOpen2(true);
      console.error("Error al hacer la solicitud: " + error);
    }
  };

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={() => setOpen(false)}
      >
        <MuiAlert
          onClose={() => setOpen(false)}
          severity="success"
          elevation={6}
          variant="filled"
        >
          Platillo Actualizado con éxito!
        </MuiAlert>
      </Snackbar>
      <Snackbar
        open={open2}
        autoHideDuration={4000}
        onClose={() => setOpen2(false)}
      >
        <MuiAlert
          onClose={() => setOpen2(false)}
          severity="error"
          elevation={6}
          variant="filled"
        >
          Hay que iniciar sesion para añadir platillos!!
        </MuiAlert>
      </Snackbar>
      <Modal
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={onClose}
        placement="center"
        className="bg-[#252836]"
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1 text-center">
            EDITAR PLATILLO
          </ModalHeader>
          <ModalBody>
            <Input
              autoFocus
              label="Nombre"
              placeholder="Nombre del platillo"
              type="text"
              variant="bordered"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              label="Descripción"
              placeholder="Escribe la Descripción"
              type="text"
              value={description}
              variant="bordered"
              onChange={(e) => setDescription(e.target.value)}
            />
            <Input
              startContent={
                <BsCurrencyDollar className=" text-default-400 pointer-events-none flex-shrink-0 " />
              }
              label="Precio"
              placeholder="Escribe el Precio"
              type="number"
              variant="bordered"
              value={price.toString()}
              onChange={(e) => setPrice(Number(e.target.value))}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="default" onPress={onClose}>
              Close
            </Button>
            <Button color="primary" onPress={handleSubmit}>
              Aceptar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ModalUpdateFood;
