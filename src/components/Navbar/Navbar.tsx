"use client";

import { useState } from "react";
import Image from "next/image";
import StoreIcon from "@/../public/images/store-icon.svg";
import { BsHouse } from "react-icons/bs";
import { AiOutlineDashboard } from "react-icons/ai";
import { CiDiscount1 ,CiSettings } from "react-icons/ci";
import {
  Button,
  Link,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as UINavbar,
} from "@nextui-org/react";
import NavTab from "@/components/NavTab/NavTab";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="w-[104px] h-screen hidden sm:flex sm:flex-col items-end bg-[#1F1D2B] border-">
        <NavTab
          isOnlyIcon
          href="/"
          icon={<Image src={StoreIcon} alt="store" fill />}
        />

        <NavTab href="/menu" icon={<BsHouse size={24} />} />
        <NavTab href="/dashboard" icon={<AiOutlineDashboard size={24} />} />
        <NavTab href="/adddish" icon={<CiSettings size={24} />} />
        <NavTab href="#" icon={<CiDiscount1 size={24} />} />
        <NavTab href="#" icon={<CiDiscount1 size={24} />} />
      </div>
      {/* <UINavbar onMenuOpenChange={setIsMenuOpen} className="sm:hidden">
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <p className="font-bold text-inherit">Restaurante</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarMenu>
          <NavbarMenuItem>
            <Link color="foreground" className="w-full" href="/" size="lg">
              Home
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              color="foreground"
              className="w-full"
              href="/dashboard"
              size="lg"
            >
              Dashboard
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </UINavbar> */}
    </>
  );
}
