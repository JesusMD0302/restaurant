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

export default function CustomTable() {
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

  const colums = [
    { key: "customer", label: "Customer" },
    { key: "menu", label: "Menú" },
    { key: "total", label: "Total Payment" },
    { key: "status", label: "Status" },
  ];

  const items = [
    {
      key: "1",
      customer: { avatar: "https://i.pravatar.cc/300", name: "Eren Jaeger" },
      menu: "Spicy seasoned seafood noodles ",
      total: "125",
      status: "completed",
    },
    {
      key: "2",
      customer: { avatar: "https://i.pravatar.cc/300", name: "Reiner Braun" },
      menu: "Salted Pasta with mushroom sauce",
      total: "145",
      status: "preparing",
    },
    {
      key: "3",
      customer: { avatar: "https://i.pravatar.cc/300", name: "Levi Ackerman" },
      menu: "Beef dumpling in hot and sour soup",
      total: "105",
      status: "pending",
    },
    {
      key: "4",
      customer: { avatar: "https://i.pravatar.cc/300", name: "Historia Reiss" },
      menu: "Hot spicy fried rice with omelet",
      total: "45",
      status: "completed",
    },
    {
      key: "5",
      customer: { avatar: "https://i.pravatar.cc/300", name: "Hanji Zoe" },
      menu: "Hot spicy fried rice with omelet",
      total: "245",
      status: "completed",
    },
    {
      key: "6",
      customer: { avatar: "https://i.pravatar.cc/300", name: "Armin Arlet" },
      menu: "Hot spicy fried rice with omelet",
      total: "435",
      status: "completed",
    },
  ];

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
      aria-label="Example table with custom cells, pagination and sorting"
      bottomContentPlacement="outside"
      classNames={classNames}
      topContentPlacement="outside"
    >
      <TableHeader columns={colums}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>

      <TableBody emptyContent={"No orders found"} items={items}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
