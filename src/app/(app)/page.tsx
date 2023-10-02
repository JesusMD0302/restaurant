import CardSaucer from "@/components/card-saucer/cardsaucer";
import ContainerSauser from "./containersauser";
import Search from "@/components/Search/search";

export default function Index() {
  return (
    <>
      <div className="">
        <Search/>
        <ContainerSauser/>
      </div>
    </>
  );
}
