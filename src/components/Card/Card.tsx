"use client"

import { Card as UICard} from "@nextui-org/react";

interface CardProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Card({ children, className }: CardProps) {
  return (
    <UICard shadow="none" radius="sm" className={`bg-[#1F1D2B] ${className}`}>
      {children}
    </UICard>
  );
}