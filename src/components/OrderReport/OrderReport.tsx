import Card from "@/components/Card/Card";
import OrdersTable from "@/components/OrdersTable/OrdersTable";
import Title from "@/components/Title/Title";
import useOrders from "@/hooks/useOrders";
import {
  Button,
  CardBody,
  CardHeader,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Spinner,
} from "@nextui-org/react";
import { BsSliders } from "react-icons/bs";

export default function OrderReport() {
  const { orders, errors, loading, status } = useOrders();

  return (
    <Card className="flex-1 overflow-visible">
      <CardHeader className="p-4 flex justify-between">
        <Title title="Order Report" titleSize={20} />
        {/* <Dropdown>
          <DropdownTrigger>
            <Button variant="bordered" startContent={<BsSliders />}>
              Filter Order
            </Button>
          </DropdownTrigger>
          <DropdownMenu>
            <DropdownItem key="status">Status</DropdownItem>
          </DropdownMenu>
        </Dropdown> */}
      </CardHeader>
        {loading || orders === null && (
        <CardBody className="grid place-items-center">
          <Spinner />
        </CardBody>
      )}
      {!loading && orders !== null && (
        <CardBody className="p-0">
          <OrdersTable orders={orders} />
        </CardBody>
      )}
    </Card>
  );
}
