import "./globals.css";
import type { Metadata } from "next";
import { Roboto, Barlow } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import { Providers } from "./providers";

const barlow = Barlow({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Restaurante",
  description: "Restaurante",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <body className={`${barlow.className} h-screen`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
