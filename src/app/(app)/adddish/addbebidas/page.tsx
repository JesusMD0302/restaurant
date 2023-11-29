"use client";
import CardAddDrinkContainer from "@/components/CardAddDrinkContainer/CardAddDrinkContainer";
import ModalAddDrink from "@/components/ModalAddDrink/ModalAddDrink";
import React from "react";
export default function Home() {
  return (
    <div className="pt-8 flex items-start">
      <ModalAddDrink/>
     
      <CardAddDrinkContainer/>
    </div>
    
  );
}
