import CardSaucer from "@/components/CardSaucer/CardSaucer";
import CardSaucerContainer from "@/components/ContainerCardSaucer/CardSaucerContainer";
import Search from "@/components/Search/Search";
import OptionsTabs from "@/components/Tabs/Optionstabs";
export default function Index() {
  return (
  
    <div className="flex-1 max-h-screen max-w-[100vw] p-6">
        <Search/>
        <OptionsTabs />
        <CardSaucerContainer/>
      </div>
    
  );
}
