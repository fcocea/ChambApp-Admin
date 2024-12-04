"use client";
import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable
} from "@tanstack/react-table";

import { ConfirmationAlert } from "@/components/ConfirmationPopUp";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  filterColumn?: string;
  aliasColumn?: string;
  pagSize?: number;
  showRequest?: boolean;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  filterColumn = "email",
  aliasColumn = "email",
  pagSize = 5,
  showRequest = false

}: DataTableProps<TData, TValue>) {
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,
    initialState: {
      pagination: {
        pageSize: pagSize
      }
    },
    state: {
      columnFilters,
      rowSelection
    }
  });

  return (
    <div>
      <div className="flex items-center py-4">
        <Input
          placeholder={`Filtrar ${aliasColumn}...`}
          value={(table.getColumn(filterColumn)?.getFilterValue() as string) ?? ""}
          onChange={event =>
            table.getColumn(filterColumn)?.setFilterValue(event.target.value)}
          className="max-w-sm"
        />
        {showRequest
          ? (
              <div className="ml-auto flex space-x-2">
                <ConfirmationAlert
                  triggerLabel="Aceptar"
                  title="¿Seguro que quieres realizar esta acción?"
                  confirmLabel="Continuar"
                  cancelLabel="Cancelar"
                >
                </ConfirmationAlert>
                <ConfirmationAlert
                  triggerLabel="Rechazar"
                  triggerVariant="outline"
                  title="¿Seguro que quieres realizar esta acción?"
                  confirmLabel="Continuar"
                  cancelLabel="Cancelar"
                >
                </ConfirmationAlert>
              </div>
            )
          : (
              <div className="ml-auto flex space-x-2">
                <ConfirmationAlert
                  triggerLabel="Funar"
                  triggerVariant="destructive"
                  title="¿Seguro que quieres realizar esta acción?"
                  confirmLabel="Continuar"
                  cancelLabel="Cancelar"
                >
                </ConfirmationAlert>
              </div>
            )}
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length
              ? (
                  table.getRowModel().rows.map(row => (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                    >
                      {row.getVisibleCells().map(cell => (
                        <TableCell key={cell.id}>
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                )
              : (
                  <TableRow>
                    <TableCell colSpan={columns.length} className="h-24 text-center">
                      No results.
                    </TableCell>
                  </TableRow>
                )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length}
          {" "}
          de
          {" "}
          {table.getFilteredRowModel().rows.length}
          {" "}
          filas seleccionadas.
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Anterior
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Siguiente
        </Button>
      </div>

    </div>
  );
}
