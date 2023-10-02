import Card from "@/components/Card/Card";
import CustomTable from "@/components/OrdersTable/OrdersTable";
import Title from "@/components/Title/Title";
import {
  Button,
  CardBody,
  CardHeader,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { BsSliders } from "react-icons/bs";

export default function OrderReport() {
  return (
    <Card className="flex-1 max-h-[400px] overflow-visible">
      <CardHeader className="p-4 flex justify-between">
        <Title title="Order Report" titleSize={20} />
        <Dropdown>
          <DropdownTrigger>
            <Button variant="bordered" startContent={<BsSliders />}>
              Filter Order
            </Button>
          </DropdownTrigger>
          <DropdownMenu>
            <DropdownItem key="status">Status</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </CardHeader>
      <CardBody className="p-0">
        <CustomTable />
      </CardBody>
    </Card>
  );
}
