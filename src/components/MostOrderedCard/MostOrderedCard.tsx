import { BsChevronDown } from "react-icons/bs";
import Card from "@/components/Card/Card";
import Title from "@/components/Title/Title";
import Button from "@/components/Button/Button";
import {
  Button as UIButton,
  CardBody,
  CardHeader,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import Order from "@/components/Order/Order";

export default function MostOrderedCard() {
  return (
    <Card className="w-full">
      <CardHeader className="p-4 flex flex-col gap-3">
        <div className="w-full flex justify-between">
          <Title title="Most Ordered" titleSize={20} />
          <Dropdown>
            <DropdownTrigger>
              <UIButton variant="bordered" startContent={<BsChevronDown />}>
                Today
              </UIButton>
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownItem>Hola</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
        <Divider />
      </CardHeader>
      <CardBody className="p-4 flex flex-col gap-4">
        <div className="grid overflow-hidden gap-6">
          <Order />
          <Order />
          <Order />
        </div>
        <Button filled={false}>View All</Button>
      </CardBody>
    </Card>
  );
}
