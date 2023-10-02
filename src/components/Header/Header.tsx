"use client"

import { Divider } from "@nextui-org/react";
import useDate from "@/hooks/useDate";
import Title from "@/components/Title/Title";

export default function Header() {
  const [date] = useDate(Date.now());

  return (
    <div className="w-full flex flex-col gap-6">
      <Title isFirstTitle title="Dashboard" subtitle={date} />
      <Divider />
    </div>
  );
}
