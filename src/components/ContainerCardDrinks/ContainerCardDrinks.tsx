import React, { useEffect } from "react";
import axios from "axios";
import CardSaucer, { CardSaucerProps } from "@/components/CardSaucer/CardSaucer";
import { useDisclosure } from "@nextui-org/react";
import { useCart } from "../CartContext/CartContext";

interface Card extends CardSaucerProps {
  imageUrl: string;
  Description: string;
}

interface Data {
  Data: Card[];
}

export default function ContainerCardDrinks() {
  const { isOpen, onOpen } = useDisclosure();
  const { addDrinkToCart } = useCart();
  const [data, setData] = React.useState<Data | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5285/api/Drink?IsDeleted=false");
        setData(response.data);
      } catch (error) {
        console.error(`Error al hacer la solicitud: ${error}`);
      }
    };

    fetchData();
  }, []);

  const handleCardClick = (card: Card) => {
    addDrinkToCart({
      ...card,
    });
    onOpen();
  };

  return (
    <>
      <div className="flex flex-col">
        <h1 className="py-5 text-2xl">ELIGE LAS BEBIDAS:</h1>
        <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {data &&
            data.Data.map((card, index) => (
              <CardSaucer
                key={index}
                {...card}
                imageUrl="https://www.conasi.eu/blog/wp-content/uploads/2014/07/zumo-de-sand%C3%ADa-1.jpg"
                onClick={() => handleCardClick(card)}
              />
            ))}
        </div>
      </div>
    </>
  );
}
