"use client";

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

export default function HeaderManager() {
  return (
    <Card className="flex-1 max-h-[400px] overflow-visible">
      <CardHeader className="p-4 flex justify-between">
        <Title title="Products Management" titleSize={20} />
        <Dropdown>
          <DropdownTrigger>
            <Button variant="bordered" startContent={<BsSliders />}>
              Manage Categories
            </Button>
          </DropdownTrigger>
          <DropdownMenu>
            <DropdownItem key="status">Status</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </CardHeader>
      
    </Card>
  );
}
