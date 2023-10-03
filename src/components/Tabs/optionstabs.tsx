import React, { useState } from 'react';
import CardSaucer from "@/components/card-saucer/cardsaucer";

export default function OptionsTabs() {
  const [activeTab, setActiveTab] = useState<number>(0); 

  const handleTabChange = (index: number) => { 
    setActiveTab(index);
  };

  const handleEnterPress = () => {
    console.log(`Mostrar contenido de la pestaña ${activeTab}`);
  };

  return (
    <div className="space-y-4 px-10 pt-10">
      <div className="border-b border-b-gray-700">
        <ul className="-mb-px flex items-center gap-4 text-lg font-medium">
          {["Platos Principales", "Tacos", "Antojitos", "Postres", "Bebidas"].map((tab, index) => (
            <li className="flex-1" key={index}>
              <a
                href="#"
                className={`relative flex items-center justify-center gap-2 px-1 py-3 ${activeTab === index ? 'text-[#EA7C69] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-[#EA7C69]' : 'text-white hover:text-[#EA7C69]'}`}
                onClick={() => handleTabChange(index)}
                onKeyDown={(e) => e.key === 'Enter' && handleEnterPress()}
                tabIndex={0} 
              >
                {tab}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
