import Search from "@/components/Search/search";
import OptionsTabs from "@/components/Tabs/optionstabs";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex-1 max-h-screen max-w-[100vw] p-6">
      <Search />
      <OptionsTabs />
      {children}
    </div>
  );
}
