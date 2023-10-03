import CardSaucer from "@/components/CardSaucer/CardSaucer";
import CardSaucerContainer from "@/components/ContainerCardSaucer/CardSaucerContainer";
import Search from "@/components/Search/search";
import OptionsTabs from "@/components/Tabs/optionstabs";

export default function Index() {
  return (
  
    <div className="flex-1 max-h-screen max-w-[100vw] p-6">
        <Search/>
        <OptionsTabs />
        <CardSaucerContainer/>
      </div>
    
  );
}
