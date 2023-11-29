// components/Providers.tsx
"use client";
import { CartProvider } from "@/components/CartContext/CartContext";
import { NextUIProvider } from "@nextui-org/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <NextUIProvider>{children}</NextUIProvider>
    </CartProvider>
  );
}
