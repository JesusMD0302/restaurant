import { BsChevronDown } from "react-icons/bs";
import Card from "@/components/Card/Card";
import Title from "@/components/Title/Title";

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
import { TypeOrderChart } from "@/components/TypeOrderChart/TypeOrderChart";

export default function MostTypeOrderCard() {
  return (
    <Card className="w-full">
      <CardHeader className="p-4 flex flex-col gap-3">
        <div className="w-full flex justify-between">
          <Title title="Most Type of Order" titleSize={20} />
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
      <CardBody className="p-4 flex flex-col gap-8">
        <div className="h-full">
          <TypeOrderChart />
        </div>
      </CardBody>
    </Card>
  );
}
