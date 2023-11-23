import useOrders from "@/hooks/useOrders";
import { Order } from "@/libs/requests";
import {
  Chip,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  User,
  getKeyValue,
} from "@nextui-org/react";
import { Key, useCallback, useEffect, useMemo } from "react";

const COLUMS = [
  { key: "customer", label: "Customer" },
  { key: "menu", label: "Menú" },
  { key: "total", label: "Total Payment" },
  { key: "status", label: "Status" },
];

export default function OrdersTable({ orders }: { orders: Order[] }) {
  const classNames = useMemo(
    () => ({
      wrapper: ["min-h-[300px]", "max-w-3xl", "flex-1"],
      th: [
        "bg-transparent",
        "border-b",
        "border-divider",
        "px-4",
        "text-sm",
        "font-semibold",
        "text-white",
      ],
      td: [
        "px-4",
        "py-[10px]",
        "text-sm",
        "text-[#E0E6E9]",
        // changing the rows border radius
        // first
        "group-data-[first=true]:first:before:rounded-none",
        "group-data-[first=true]:last:before:rounded-none",
        // middle
        "group-data-[middle=true]:before:rounded-none",
        // last
        "group-data-[last=true]:first:before:rounded-none",
        "group-data-[last=true]:last:before:rounded-none",
      ],
    }),
    []
  );

  const renderCell = useCallback((item: any, key: Key) => {
    const cellValue = getKeyValue(item, key);

    switch (key) {
      case "customer":
        return (
          <User
            name={cellValue!.name}
            avatarProps={{
              src: cellValue!.avatar,
            }}
          />
        );
      case "total":
        return `$${cellValue}`;
      case "status":
        switch (cellValue) {
          case "completed":
            return <Chip color="success">Completed</Chip>;
          case "preparing":
            return <Chip color="secondary">Preparing</Chip>;
          case "pending":
            return <Chip color="warning">Pending</Chip>;

          default:
            return <Chip color="default">Unknow</Chip>;
        }
      default:
        return cellValue;
    }
  }, []);

  return (
    <Table
      isCompact
      removeWrapper
      bottomContentPlacement="outside"
      classNames={classNames}
      topContentPlacement="outside"
    >
      <TableHeader columns={COLUMS}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>

      <TableBody emptyContent={"No orders found"} items={orders}>
        {(order) => (
          <TableRow key={order.key}>
            {(columnKey) => (
              <TableCell>{renderCell(order, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
