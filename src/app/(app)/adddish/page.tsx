"use client";
import React from "react";
import ModalAddFood from "@/components/ModalAddFood/ModalAddFood";
import CardAddSaucerContainer from "@/components/ContainerCardAddSaucer/CardAddSaucerContainer";
export default function Home() {
  return (
    <div className="pt-8 flex items-start">
      <ModalAddFood/>
     
      <CardAddSaucerContainer/>
    </div>
    
  );
}
