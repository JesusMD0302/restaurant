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
import { Key, useCallback, useMemo } from "react";

const COLUMS = [
  { key: "CustomerFullName", label: "Customer" },
  // { key: "menu", label: "Menú" },
  // { key: "total", label: "Total Payment" },
  { key: "StatusName", label: "Status" },
];

export default function OrdersTable({ orders }: { orders: Order[] }) {
  const classNames = useMemo(
    () => ({
      wrapper: ["min-h-[300px]", "max-w-3xl", "flex-1"],
      thead: ["sticky top-0 z-30 bg-[#1f1d2b] [&_th]:aria-hidden:hidden"],
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
      case "CustomerFullName":
        return <User name={cellValue} />;
      // case "total":
      //   return `$${cellValue}`;
      case "StatusName":
        switch (cellValue) {
          case "Terminado":
            return <Chip color="success">Completado</Chip>;
          case "Pedido":
            return <Chip color="secondary">Pedido</Chip>;
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
          <TableRow key={order.Id}>
            {(columnKey) => (
              <TableCell>{renderCell(order, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
