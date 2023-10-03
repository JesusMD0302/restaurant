'use client'
import React from "react";
import {Tabs, Tab, Chip} from "@nextui-org/react";

export default function OptionsTabs() {
 
  return (
    <div className="pt-5 px-3 flex w-full flex-col">
    <Tabs 
      aria-label="Options" 
      color="primary" 
      variant="underlined"
      classNames={{
        tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
        cursor: "w-full bg-[#EA9769]",
        tab: "max-w-fit px-0 h-12",
        tabContent: "group-data-[selected=true]:text-[#EA9769]"
      }}
    >
      <Tab
        key="Platos principales"
        title={
          <div className="flex items-center space-x-2">
            
            <span>Platos principales</span>
           {/*  <Chip size="sm" variant="faded">9</Chip> */}
          </div>
        }
      />
      <Tab
        key="Bebidas"
        title={
          <div className="flex items-center space-x-2">
         
            <span>Bebidas</span>
          {/*   <Chip size="sm" variant="faded">3</Chip> */}
          </div>
        }
      />
      <Tab
        key="Postres"
        title={
          <div className="flex items-center space-x-2">
         
            <span>Postres</span>
          {/*   <Chip size="sm" variant="faded">3</Chip> */}
          </div>
        }
      />
      <Tab
        key="Antojitos"
        title={
          <div className="flex items-center space-x-2">
         
            <span>Antojitos</span>
          {/*   <Chip size="sm" variant="faded">3</Chip> */}
          </div>
        }
      />
      <Tab
        key="Tacos"
        title={
          <div className="flex items-center space-x-2">
          
            <span>Tacos</span>
          {/*   <Chip size="sm" variant="faded">1</Chip> */}
          </div>
        }
      />
    </Tabs>
  </div>  
  );
}
