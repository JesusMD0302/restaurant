import Card from "@/components/Card/Card";
import {
  CardBody,
  CardHeader,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";

const CLASSNAMES = {
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
};

export default function OrderReportSkeleton() {
  const cols = [1, 2, 3, 4];
  const rows = [1, 2, 3];
  return (
    <Card className="flex-1 max-h-[400px] overflow-visible">
      <CardHeader className="p-4 flex justify-between">
        <Skeleton className="rounded-lg w-2/12">
          <div className="h-7 rounded-lg bg-default-300"></div>
        </Skeleton>
      </CardHeader>
      <CardBody className="p-0">
        <Table
          isCompact
          removeWrapper
          aria-label="Example table with custom cells, pagination and sorting"
          bottomContentPlacement="outside"
          classNames={CLASSNAMES}
          topContentPlacement="outside"
        >
          <TableHeader>
            {cols.map((_, key) => (
              <TableColumn key={key}>
                <Skeleton className="rounded-lg">
                  <div className="h-5 rounded-lg bg-default-300"></div>
                </Skeleton>
              </TableColumn>
            ))}
          </TableHeader>
          <TableBody emptyContent={"No orders found"}>
            {rows.map((_, key) => (
              <TableRow key={key}>
                {cols.map((_, key) => {
                  if (key === 0)
                    return (
                      <TableCell key={0.0} className="w-1/4">
                        <article className="max-w-[200px] flex items-center gap-3">
                          <section>
                            <Skeleton className="flex rounded-full w-10 h-10" />
                          </section>
                          <section className="w-full flex flex-col gap-2">
                            <Skeleton className="h-2 w-3/5 rounded-lg" />
                            <Skeleton className="h-2 w-4/5 rounded-lg" />
                          </section>
                        </article>
                      </TableCell>
                    );
                  return (
                    <TableCell key={key}>
                      <Skeleton className="rounded-lg w-2/3">
                        <div className="h-7 rounded-lg bg-default-300"></div>
                      </Skeleton>
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardBody>
    </Card>
  );
}
