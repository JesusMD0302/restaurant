"use client";
import React, { useEffect, useState } from "react";
import { Tabs, Tab } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function TabsManager() {
  const pathname = usePathname();
  const [tabActive, setTabActive] = useState("");

  useEffect(() => {
    setTabActive(pathname.split("/").at(-1) as string);
  }, [pathname]);

  return (
    <div className="px-4 flex w-full flex-col">
      <Tabs
        aria-label="Options"
        color="primary"
        variant="underlined"
        selectedKey={tabActive}
        classNames={{
          tabList:
            "gap-6 w-full relative rounded-none p-0 border-b border-divider ",
          cursor: "w-full bg-[#EA9769]",
          tab: "max-w-fit px-0 h-12 ",
          tabContent: "group-data-[selected=true]:text-[#EA9769] text-white",
        }}
      >
        <Tab
          key="setting"
          title={
            <Link href="/setting">
              <div className="flex items-center space-x-2 ">
                <span>Platos principales</span>
              </div>
            </Link>
          }
        />
        <Tab
          key="addbebidas"
          title={
            <Link href="/setting/addbebidas">
              <div className="flex items-center space-x-2">
                <span>Bebidas</span>
              </div>
            </Link>
          }
        />
        <Tab
          key="addpostres"
          title={
            <Link href="/setting/addpostres">
              <div className="flex items-center space-x-2">
                <span>Postres</span>
              </div>
            </Link>
          }
        />
        <Tab
          key="addantojitos"
          title={
            <Link href="/setting/addantojitos">
              <div className="flex items-center space-x-2">
                <span>Antojitos</span>
              </div>
            </Link>
          }
        />
        <Tab
          key="addtacos"
          title={
            <Link href="/setting/addtacos">
              <div className="flex items-center space-x-2">
                <span>Tacos</span>
              </div>
            </Link>
          }
        />
      </Tabs>
    </div>
  );
}
