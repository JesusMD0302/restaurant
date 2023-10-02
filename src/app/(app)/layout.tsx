import Navbar from "@/components/Navbar/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex max-w-full">
      <Navbar />
      {children}
    </div>
  );
}
