import Navbar from "@/components/Navbar/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex max-w-full overflow-y-auto">
      <Navbar />
      {children}
    </main>
  );
}
