"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { Card, CardBody } from "@nextui-org/react";
import axios from "axios";
import { BsPlus } from "react-icons/bs";

const ModalAddFood = () => {
  const { isOpen, onOpen, onOpenChange,onClose  } = useDisclosure();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
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
      const response = await axios.post(
        "http://localhost:5285/api/Food",
        data,
        { headers }
      );
      console.log(response.data);
      /* onOpenChange(); */
      setOpen(true);
      onClose();
      setName("");
      setDescription("");
      setPrice(0);
     
    } catch (error) {
      setOpen2(true);
      setName("");
      setDescription("");
      setPrice(0);
      console.error('Hay que iniciar sesion burro!!');
    }
  };

  return (
    <>
      <Card
        onPress={onOpen}
        shadow="sm"
        isPressable
        className="h-[325px] w-[225px] border-dotted border-2 bg-transparent shadow-none border-[#EA7C69] mx-4"
      >
        <CardBody className="flex items-center h-full justify-center overflow-visible p-0 ">
          <BsPlus className="text-[#EA7C69] text-3xl" />
          <span className="font-medium text-[#EA7C69] mt-2">Add new dish</span>
        </CardBody>
      </Card>
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
          Platillo agregado con éxito!
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
        onOpenChange={onOpenChange}
        placement="top-center"
        className="bg-[#252836]"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-center">
                AÑADIR PLATILLO
              </ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  /* endContent={
                    <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  } */
                  label="Nombre"
                  placeholder="Nombre del platillo"
                  type="text"
                  variant="bordered"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Input
                  /* endContent={
                    <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  } */
                  label="Descripción"
                  placeholder="Escribe la Descripción"
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  variant="bordered"
                />
                <Input
                  label="Precio"
                  placeholder="Escribe el Precio"
                  type="number"
                  variant="bordered"
                  value={price.toString()}
                  onChange={(e) => setPrice(Number(e.target.value))}
                />
                {/*  <div className="flex py-2 px-1 justify-between">
                  <Checkbox
                    classNames={{
                      label: "text-small",
                    }}
                  >
                    Remember me
                  </Checkbox>
                  <Link color="primary" href="#" size="sm">
                    Forgot password?
                  </Link>
                </div> */}
              </ModalBody>
              <ModalFooter>
                <Button color="default" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={handleSubmit}>
                  Añadir
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalAddFood;