'use client'
import React from "react";
import {Tabs, Tab} from "@nextui-org/react";

export default function OptionsTabs() {
 
  return (
    <div className="pt-5 flex w-full flex-col">
    <Tabs 
      aria-label="Options" 
      color="primary" 
      variant="underlined"
      classNames={{
        tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider ",
        cursor: "w-full bg-[#EA9769]",
        tab: "max-w-fit px-0 h-12 ",
        tabContent: "group-data-[selected=true]:text-[#EA9769] text-white"
      }}
    >
      <Tab
        key="Platos principales"
        title={
          <div className="flex items-center space-x-2 ">
            
            <span>Platos principales</span>
        
          </div>
        }
      />
      <Tab
        key="Bebidas"
        title={
          <div className="flex items-center space-x-2">
         
            <span>Bebidas</span>
         
          </div>
        }
      />
      <Tab
        key="Postres"
        title={
          <div className="flex items-center space-x-2">
         
            <span>Postres</span>
         
          </div>
        }
      />
      <Tab
        key="Antojitos"
        title={
          <div className="flex items-center space-x-2">
         
            <span>Antojitos</span>
         
          </div>
        }
      />
      <Tab
        key="Tacos"
        title={
          <div className="flex items-center space-x-2">
            <span>Tacos</span>
         
          </div>
        }
      />
    </Tabs>
  </div>  
  );
}
