import CardSaucer from "@/components/card-saucer/cardsaucer";
import Search from "@/components/Search/search";
import OptionsTabs from "@/components/Tabs/optionstabs";
import { useState } from "react";

export default function Index() {
  const initialCardData = [
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
  const [cardData, setCardData] = useState(initialCardData);
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
    // Filtra los datos de la tarjeta según la pestaña activa
    const filteredData = initialCardData.filter((_, i) => i === index);
    setCardData(filteredData);
  };
  return (
      <div className="container">
        <Search/>
        <OptionsTabs />
      <h1 className="pt-5 text-xl pl-8">ELIGE LOS PLATILLOS:</h1>
      <div className=" px-5 grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-8">
        {cardData.map((card, index) => (
          <CardSaucer key={index} {...card} />
        ))}
      </div>
      </div>
  );
}
