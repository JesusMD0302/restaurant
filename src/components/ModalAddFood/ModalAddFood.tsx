"use client";
import React, { useEffect, useState } from "react";
import { FaBeer } from "react-icons/fa";
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
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { BsCurrencyDollar } from "react-icons/bs";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { Card, CardBody } from "@nextui-org/react";
import axios from "axios";
import { BsPlus } from "react-icons/bs";
interface Category {
  Id: number;
  Name: string;
  Description: string;
  ProductType: number;
  ProductTypeName: string;
  Status: string;
}
const ModalAddFood = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5285/api/Category?ProductType=1&IsDeleted=false"
        );
        setCategories(response.data.Data);
        console.log("API Response:", response.data.Data);
      } catch (error) {
        console.error(`Error al hacer la solicitud: ${error}`);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async () => {
    if (selectedCategoryId === null) {
      console.error('Por favor, selecciona una categoría antes de enviar.');
      return;
    }
  
    const token = localStorage.getItem("token");
    const data = {
      Name: name,
      Description: description,
      Price: price,
      CategoryIds: [selectedCategoryId],
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
      console.log(data);
      console.error("Hay que iniciar sesion burro!!");
    }
  };
  /*  const handleAutocompleteChange = (value: Category | null) => {
    setSelectedCategory(value);
    console.log("Selected Category State:", value);
  }; */
  const handleSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedCategory = categories.find(category => category.Name === event.target.value);
    if (selectedCategory) {
      setSelectedCategoryId(selectedCategory.Id);
      console.log('ID de la categoría seleccionada:', selectedCategory.Id);
    }
  };

  
  
  return (
    <>
      <Card
        onPress={onOpen}
        shadow="sm"
        isPressable
        className=" border-dotted border-2 bg-transparent shadow-none border-[#EA7C69] "
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
        placement="center"
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
                  label="Descripción"
                  placeholder="Escribe la Descripción"
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  variant="bordered"
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

                <Autocomplete
                  variant="bordered"
                  isRequired
                  label="Categorías"
                  defaultItems={categories}
                  placeholder="Busca una categoría"
                  onSelect={handleSelection}
                >
                  {(item) => (
                    <AutocompleteItem key={item.Id}>
                      {item.Name}
                    </AutocompleteItem>
                  )}
                </Autocomplete>
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
