import React, { useState, useEffect } from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ChevronDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CardDescription } from "./ui/card";

export type Payment = {
  taskId: string;
  title: string;
  status: string;
  priority: string;
};

type StatusIcons = Record<string, { icon: React.ReactNode; text: string }>;
type PriorityIcons = Record<string, { icon: React.ReactNode; text: string }>;

const statusIcons: StatusIcons = {
  Backlog: {
    icon: <img src="/backlog.png" alt="Backlog" className="w-5 h-5 mr-2" />,
    text: "Backlog",
  },
  Todo: {
    icon: <img src="/todo.png" alt="Todo" className="w-5 h-5 mr-2" />,
    text: "Todo",
  },
  Inprogress: {
    icon: (
      <img src="/inprogress.png" alt="In Progress" className="w-5 h-5 mr-2" />
    ),
    text: "Inprogress",
  },
  Done: {
    icon: <img src="/done.png" alt="Done" className="w-5 h-5 mr-2" />,
    text: "Done",
  },
  Cancelled: {
    icon: <img src="/cancelled.png" alt="Cancelled" className="w-5 h-5 mr-2" />,
    text: "Cancelled",
  },
};
const priorityIcons: PriorityIcons = {
  Medium: {
    icon: <img src="/medium.png" alt="Medium" className="w-5 h-5" />,
    text: "Medium",
  },
  High: {
    icon: <img src="/high.png" alt="High" className="w-5 h-5" />,
    text: "High",
  },
  Low: {
    icon: <img src="/low.png" alt="Low" className="w-5 h-5" />,
    text: "Low",
  },
};

const data: Payment[] = [
  {
    taskId: "TASK-8782",
    title:
      "You can't compress the program without quantifying the open-source SSD pixel!",
    status: "Backlog",
    priority: "Medium",
  },
  {
    taskId: "TASK-5562",
    title:
      "The SAS interface is down, bypass the open-source pixel so we can back up the PNG bandwidth!",
    status: "Todo",
    priority: "High",
  },
  {
    taskId: "TASK-6699",
    title:
      "I'll transmit the wireless JBOD capacitor, that should hard drive the SSD feed!",
    status: "Inprogress",
    priority: "Low",
  },
  {
    taskId: "TASK-2858",
    title: "We need to override the online UDP bus!",
    status: "Done",
    priority: "High",
  },
  {
    taskId: "TASK-9885",
    title: "We need to compress the auxiliary VGA driver!",
    status: "Cancelled",
    priority: "Low",
  },
  {
    taskId: "TASK-3216",
    title:
      "Transmitting the transmitter won't do anything, we need to compress the virtual HDD s",
    status: "Cancelled",
    priority: "Low",
  },
  {
    taskId: "TASK-5581",
    title:
      "I'll synthesize the digital COM pixel, that should transmitter the UTF8 protocol!",
    status: "Done",
    priority: "High",
  },
  {
    taskId: "TASK-1376",
    title:
      "Generating the alarm won't do anything, we need to generate the mobile IP capacitor!",
    status: "Inprogress",
    priority: "Medium",
  },
  {
    taskId: "TASK-7342",
    title: "Use the neural CLI card, then you can parse the online port!",
    status: "Inprogress",
    priority: "High",
  },
  {
    taskId: "TASK-9581",
    title:
      "You can't index the port without hacking the cross-platform XSS monitor!",
    status: "Done",
    priority: "Medium",
  },
];

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "task",
    header: "Task",
    cell: ({ row }) => <div>{row.original.taskId}</div>,
  },
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => <div>{row.original.title}</div>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const { icon, text } = statusIcons[row.original.status];

      return (
        <div className="flex items-center">
          {icon}
          <span>{text}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "priority",
    header: "Priority",
    cell: ({ row }) => {
      const { icon, text } = priorityIcons[row.original.priority];

      return (
        <div className="flex items-center">
          {icon}
          <span>{text}</span>
        </div>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Edit</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.taskId)}
            >
              Make a copy
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Favorite</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

function TaskTable() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});
  const [pageIndex, setPageIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  const [selectedPriority, setSelectedPriority] = useState<string | null>(null);
  const pageSize = 5;

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  useEffect(() => {
    if (searchQuery) {
      setColumnFilters([{ id: "title", value: searchQuery }]);
    } else {
      setColumnFilters([]);
    }
  }, [searchQuery]);

  const startItemIndex = pageIndex * pageSize;
  const endItemIndex = Math.min(
    (pageIndex + 1) * pageSize,
    table.getFilteredRowModel().rows.length
  );
  const handleStatusChange = (status: string) => {
    setSelectedStatus(status === selectedStatus ? null : status);
  };

  const handlePriorityChange = (priority: string) => {
    setSelectedPriority(priority === selectedPriority ? null : priority);
  };

  return (
    <div className="p-10 border-2 border-gray">
      <div className="p-10 border-2 border-gray rounded-lg">
        <div className="w-full">
          <h1 className="text-2xl font-bold mb-4">Welcome back!</h1>
          <CardDescription>
            Here's a list of your tasks for this month!
          </CardDescription>
          <div className="flex items-center py-4">
            <Input
              placeholder="Filter tasks by title..."
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              className="max-w-sm"
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="ml-4">
                  Status <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {Object.entries(statusIcons).map(([status, { text, icon }]) => (
                  <DropdownMenuItem
                    key={status}
                    onClick={() => handleStatusChange(status)}
                    className={`flex items-center ${
                      status === selectedStatus ? "bg-gray-200" : ""
                    }`}
                  >
                    {icon}
                    <span className="ml-2">{text}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="ml-4">
                  Priority <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {Object.entries(priorityIcons).map(
                  ([priority, { text, icon }]) => (
                    <DropdownMenuItem
                      key={priority}
                      onClick={() => handlePriorityChange(priority)}
                      className={`flex items-center ${
                        priority === selectedPriority ? "bg-gray-200" : ""
                      }`}
                    >
                      {icon}
                      <span className="ml-2">{text}</span>
                    </DropdownMenuItem>
                  )
                )}
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="ml-auto">
                  View <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {table
                  .getAllColumns()
                  .filter((column) => column.getCanHide())
                  .map((column) => {
                    return (
                      <DropdownMenuCheckboxItem
                        key={column.id}
                        className="capitalize"
                        checked={column.getIsVisible()}
                        onCheckedChange={(value) =>
                          column.toggleVisibility(!!value)
                        }
                      >
                        {column.id}
                      </DropdownMenuCheckboxItem>
                    );
                  })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead key={header.id}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                        </TableHead>
                      );
                    })}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table
                    .getRowModel()
                    .rows.slice(startItemIndex, endItemIndex)
                    .map((row) => (
                      <TableRow
                        key={row.id}
                        data-state={row.getIsSelected() && "selected"}
                      >
                        {row.getVisibleCells().map((cell) => (
                          <TableCell key={cell.id}>
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className="h-24 text-center"
                    >
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          <div className="flex items-center justify-between py-4">
            <div className="flex-1 text-sm text-muted-foreground">
              Showing {startItemIndex + 1}-{endItemIndex} of{" "}
              {table.getFilteredRowModel().rows.length} tasks
            </div>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="sm"
                disabled={pageIndex === 0}
                onClick={() => setPageIndex((prev) => prev - 1)}
              >
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                disabled={
                  endItemIndex >= table.getFilteredRowModel().rows.length
                }
                onClick={() => setPageIndex((prev) => prev + 1)}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskTable;
