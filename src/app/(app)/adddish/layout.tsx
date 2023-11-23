/* import Search from "@/components/Search/search"; */
"use client";
import HeaderManager from "@/components/HeaderManager/HeaderManager";
import OrderReport from "@/components/OrderReport/OrderReport";
import TabsManager from "@/components/Tabs/TabsManager";
import Title from "@/components/Title/Title";
import React from "react";
import { Button } from "@nextui-org/react";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex-1 max-h-screen max-w-[100vw] p-6">
      {/* <div className="pb-6 px-2">
        <Title isFirstTitle title="Settings" />
      </div> */}
      {/*  <Search /> */}

      <div className="container bg-[#1F1D2B] rounded-lg ">
        <HeaderManager />
        <TabsManager />
        {children}
      {/*   <div className="py-4 mx-4">
          <Button className="me-4" color="primary" variant="bordered">
            <span className="mx-4">Discard Changes</span>
          </Button>
          <Button color="primary" variant="shadow">
            <span className="mx-4">Save Changes</span>
          </Button>
        </div> */}
      </div>
    </div>
  );
}
