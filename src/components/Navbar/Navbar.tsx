import Image from "next/image";
import StoreIcon from "@/../public/images/store-icon.svg";
import { BsHouse } from "react-icons/bs";
import { AiOutlineDashboard } from "react-icons/ai";
import { CiDiscount1 } from "react-icons/ci";
import NavTab from "@/components/NavTab/NavTab";
import InactiveNavTab from "@/../public/images/inactive-navtab.svg";

export default function Navbar() {
  return (
    <div className="w-[104px] h-screen flex flex-col items-end bg-[#1F1D2B] border-">
      <NavTab
        isOnlyIcon
        href=""
        icon={<Image src={StoreIcon} alt="store" fill />}
      />

      <NavTab href="/" icon={<BsHouse size={24} />} />
      <NavTab href="/dashboard" icon={<AiOutlineDashboard size={24} />} />
      <NavTab href="" icon={<CiDiscount1 size={24} />} />
      <NavTab href="" icon={<CiDiscount1 size={24} />} />
      <NavTab href="" icon={<CiDiscount1 size={24} />} />
    </div>
  );
}
