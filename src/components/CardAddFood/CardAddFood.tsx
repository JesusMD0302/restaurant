import { Card, CardBody } from "@nextui-org/react";
import { BsPlus } from "react-icons/bs";

export default function CardAddFood() {
   /*  const {isOpen, onOpen, onOpenChange} = useDisclosure(); */
    return ( 
        
        <Card shadow="sm" isPressable className="h-[325px] w-[225px] border-dotted border-2 bg-transparent shadow-none border-[#EA7C69] mx-4">
          <CardBody className="flex items-center h-full justify-center overflow-visible p-0 ">
            <BsPlus className="text-[#EA7C69] text-3xl"  />
            <span className="font-medium text-[#EA7C69] mt-2">Add new dish</span>
          </CardBody>
        </Card> 
    );
  }