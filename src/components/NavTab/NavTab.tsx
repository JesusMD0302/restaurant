"use client";

import Image from "next/image";
import ActiveNavTab from "@/../public/images/active-navtab.svg";
import InactiveNavTab from "@/../public/images/inactive-navtab.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavTabProps {
  isOnlyIcon?: boolean;
  href: string;
  icon: JSX.Element;
}

export default function NavTab({
  isOnlyIcon = false,
  icon,
  href,
}: NavTabProps) {
  const pathname = usePathname();

  if (isOnlyIcon) {
    return (
      <div className="w-[92px] h-[102px] relative">
        <div className="relative w-full h-full">
          <Image src={InactiveNavTab} fill alt="" className="object-cover" />
        </div>
        <div className="p-4 bg-[#EB966A]/25 text-white rounded-md absolute top-1/2 left-[12px]  -translate-y-1/2">
          <div className="w-[24px] h-[24px] relative">
            {icon}
          </div>
        </div>
      </div>
    );
  }

  if (pathname.startsWith(href)) {
    return (
      <Link href={href}>
        <div className="w-[92px] h-[102px] relative z-10">
          <div className="relative w-full h-full">
            <Image src={ActiveNavTab} fill alt="" className="object-cover" />
          </div>
          <div className="p-4 bg-[#EA7C69] text-white rounded-md absolute top-1/2 left-[12px]  -translate-y-1/2">
            {icon}
          </div>
        </div>
      </Link>
    );
  } else {
    return (
      <Link href={href}>
        <div className="w-[92px] h-[102px] relative group hover:cursor-pointer">
          <div className="relative w-full h-full">
            <Image src={InactiveNavTab} fill alt="" className="object-cover" />
          </div>
          <div
            className="icon p-4 text-[#EA7C69] bg-transparent rounded-md absolute top-1/2 left-[12px] -translate-y-1/2 
        group-hover:bg-[#EA7C69] group-hover:text-white"
          >
            {icon}
          </div>
        </div>
      </Link>
    );
  }
}
