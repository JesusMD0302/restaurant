import React from "react";

import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

export default function CardSaucerContainer() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const cardData = [
    {
      imageUrl:
        "https://img.freepik.com/free-photo/pasta-spaghetti-with-shrimps-sauce_1220-5072.jpg?w=2000&t=st=1678041911~exp=1678042511~hmac=e4aa55e70f8c231d4d23832a611004f86eeb3b6ca067b3fa0c374ac78fe7aba6",
      title: "Espaguetis con salsa de gambas ",
      regularPrice: "$700.00",
      salePrice: "$700.00",
      description: "Descripcion de producto",
      viewUrl: "foodiesapp://food/1002",
    },
    {
      imageUrl:
        "https://img.freepik.com/free-photo/pasta-spaghetti-with-shrimps-sauce_1220-5072.jpg?w=2000&t=st=1678041911~exp=1678042511~hmac=e4aa55e70f8c231d4d23832a611004f86eeb3b6ca067b3fa0c374ac78fe7aba6",
      title: "Espaguetis con salsa de gambas ",
      regularPrice: "$700.00",
      salePrice: "$700.00",
      description: "Descripcion de producto",
      viewUrl: "foodiesapp://food/1002",
    },
    {
      imageUrl:
        "https://img.freepik.com/free-photo/pasta-spaghetti-with-shrimps-sauce_1220-5072.jpg?w=2000&t=st=1678041911~exp=1678042511~hmac=e4aa55e70f8c231d4d23832a611004f86eeb3b6ca067b3fa0c374ac78fe7aba6",
      title: "Espaguetis con salsa de gambas ",
      regularPrice: "$700.00",
      salePrice: "$700.00",
      description: "Descripcion de producto",
      viewUrl: "foodiesapp://food/1002",
    },
    {
      imageUrl:
        "https://img.freepik.com/free-photo/pasta-spaghetti-with-shrimps-sauce_1220-5072.jpg?w=2000&t=st=1678041911~exp=1678042511~hmac=e4aa55e70f8c231d4d23832a611004f86eeb3b6ca067b3fa0c374ac78fe7aba6",
      title: "Espaguetis con salsa de gambas ",
      regularPrice: "$700.00",
      salePrice: "$700.00",
      description: "Descripcion de producto",
      viewUrl: "foodiesapp://food/1002",
    },
    {
      imageUrl:
        "https://img.freepik.com/free-photo/pasta-spaghetti-with-shrimps-sauce_1220-5072.jpg?w=2000&t=st=1678041911~exp=1678042511~hmac=e4aa55e70f8c231d4d23832a611004f86eeb3b6ca067b3fa0c374ac78fe7aba6",
      title: "Espaguetis con salsa de gambas ",
      regularPrice: "$700.00",
      salePrice: "$700.00",
      description: "Descripcion de producto",
      viewUrl: "foodiesapp://food/1002",
    },
  ];
  return (
    <>
    <Button onPress={onOpen}>Open Modal</Button>
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
            <ModalBody>
              <p> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam pulvinar risus non risus hendrerit venenatis.
                Pellentesque sit amet hendrerit risus, sed porttitor quam.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam pulvinar risus non risus hendrerit venenatis.
                Pellentesque sit amet hendrerit risus, sed porttitor quam.
              </p>
              <p>
                Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. 
                Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. 
                Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur 
                proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
              </p>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={onClose}>
                Action
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  </>
  
  );
}
