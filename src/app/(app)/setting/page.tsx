"use client";
import React from "react";
import { Card, CardFooter, Image, Button, CardBody } from "@nextui-org/react";
import { BsDot, BsPlus } from "react-icons/bs";
import { LuPencilLine } from "react-icons/lu";
export default function Home() {
  return (
    <div className="pt-8 flex items-start">
      <Card shadow="sm" isPressable className="h-[325px] w-[225px] border-dotted border-2 bg-transparent shadow-none border-[#EA7C69] mx-4">
        <CardBody className="flex items-center h-full justify-center overflow-visible p-0 ">
          <BsPlus className="text-[#EA7C69] text-3xl"  />
          <span className="font-medium text-[#EA7C69] mt-2">Add new dish</span>
        </CardBody>
      </Card>
      <Card isFooterBlurred radius="lg" className="border-none bg-transparent">
        <CardBody>
          <Image
            alt="Woman listing to music"
            className="object-cover"
            height={200}
            src="https://img.freepik.com/free-photo/pasta-spaghetti-with-shrimps-sauce_1220-5072.jpg?w=2000&t=st=1678041911~exp=1678042511~hmac=e4aa55e70f8c231d4d23832a611004f86eeb3b6ca067b3fa0c374ac78fe7aba6"
            width={200}
          />
          <p className="my-4 max-w-[15ch] text-center font-medium m-auto">
            Spicy seasoned seafood noodles
          </p>
          <span className="flex justify-center items-center gap-1 text-[#949494]">
            <span>$2.29</span>
            <BsDot />
            <span>20 Bolws</span>
          </span>
        </CardBody>
        <CardFooter className="p-0 w-full">
          <Button
            className="w-full rounded-s-none font-semibold rounded-e-none text-base text-[#EA7C69] bg-[#ea7c693d]"
            variant="flat"
            color="default"
            radius="lg"
            size="lg"
          >
            <LuPencilLine />
            Edit dish
          </Button>
        </CardFooter>
      </Card>

    </div>
    
  );
}
