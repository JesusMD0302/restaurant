"use client";

import Header from "@/components/Header/Header";
import OrderReport from "@/components/OrderReport/OrderReport";
import Summarys from "@/components/Summarys/Summarys";
import { ScrollShadow } from "@nextui-org/react";
import MostOrderedCard from "@/components/MostOrderedCard/MostOrderedCard";
import MostTypeOrderCard from "@/components/MostTypeOrderCard/MostTypeOrderCard";

export default function Dashboard() {
  return (
    <div className="flex-1 max-h-screen max-w-[100vw] p-6">
      <div className="max-h-full overflow-y-scroll md:overflow-clip grid grid-rows-[100%_100%] grid-cols-1 md:grid-rows-1 md:grid-cols-[2fr_1fr] gap-6">
        {/* Column left */}
        <div className="h-full flex flex-col gap-6">
          <Header />
          <ScrollShadow className="flex-1 flex flex-col gap-6 pr-2">
            <Summarys />
            <OrderReport />
          </ScrollShadow>
        </div>
        {/* Column rigth */}
        <div className="max-h-full grid grid-rows-[5fr_4fr] gap-6">
          <MostOrderedCard />
          <MostTypeOrderCard />
        </div>
      </div>
    </div>
  );
}
