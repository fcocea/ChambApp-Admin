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
import { acceptChamberRequests, forgiveUsers, funarAnuncios, funarUsuarios, reactivateAdvertisements, rejectChamberRequests } from "@/lib/api/actions";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  filterColumn?: string;
  aliasColumn?: string;
  pagSize?: number;
  showRequest?: boolean;
  showForgive?: boolean;
  showReport?: boolean;
  showReactivate?: boolean; // New prop to show "Reactivar" button
}

export function DataTable<TData, TValue>({
  columns,
  data,
  filterColumn = "email",
  aliasColumn = "email",
  pagSize = 5,
  showRequest = false,
  showForgive = false,
  showReport = false,
  showReactivate = false // Default to false
}: DataTableProps<TData, TValue>) {
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
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
    <div className="p-4 bg-white rounded-md shadow-md">
      <div className="flex items-center py-4">
        <Input
          placeholder={`Filtrar ${aliasColumn}...`}
          value={(table.getColumn(filterColumn)?.getFilterValue() as string) ?? ""}
          onChange={event =>
            table.getColumn(filterColumn)?.setFilterValue(event.target.value)}
          className="max-w-sm"
        />
        <div className="ml-auto flex space-x-2">
          {showRequest
            ? (
                <>
                  <ConfirmationAlert
                    triggerLabel="Aceptar"
                    title="¿Seguro que quieres realizar esta acción?"
                    confirmLabel="Continuar"
                    cancelLabel="Cancelar"
                    onConfirm={() => acceptChamberRequests(table.getFilteredSelectedRowModel().rows.map(row => row.original.rut))}
                  />
                  <ConfirmationAlert
                    triggerLabel="Rechazar"
                    triggerVariant="outline"
                    title="¿Seguro que quieres realizar esta acción?"
                    confirmLabel="Continuar"
                    cancelLabel="Cancelar"
                    onConfirm={() => rejectChamberRequests(table.getFilteredSelectedRowModel().rows.map(row => row.original.rut))}
                  />
                </>
              )
            : showForgive
              ? (
                  <ConfirmationAlert
                    triggerLabel="Perdonar"
                    triggerVariant="blue"
                    title="¿Seguro que quieres perdonar a estos usuarios?"
                    confirmLabel="Continuar"
                    cancelLabel="Cancelar"
                    onConfirm={() => forgiveUsers(table.getFilteredSelectedRowModel().rows.map(row => row.original.rut))}
                  />
                )
              : showReport
                ? (
                    <ConfirmationAlert
                      triggerLabel="Reportar"
                      triggerVariant="destructive"
                      title="¿Seguro que quieres reportar estos anuncios?"
                      confirmLabel="Continuar"
                      cancelLabel="Cancelar"
                      onConfirm={() => funarAnuncios(table.getFilteredSelectedRowModel().rows.map(row => row.original.ad_id))}
                    />
                  )
                : showReactivate
                  ? (
                      <ConfirmationAlert
                        triggerLabel="Reactivar"
                        triggerVariant="blue"
                        title="¿Seguro que quieres reactivar estos anuncios?"
                        confirmLabel="Continuar"
                        cancelLabel="Cancelar"
                        onConfirm={() => reactivateAdvertisements(table.getFilteredSelectedRowModel().rows.map(row => row.original.ad_id))}
                      />
                    )
                  : (
                      <ConfirmationAlert
                        triggerLabel="Funar"
                        triggerVariant="destructive"
                        title="¿Seguro que quieres realizar esta acción?"
                        confirmLabel="Continuar"
                        cancelLabel="Cancelar"
                        onConfirm={() => funarUsuarios(table.getFilteredSelectedRowModel().rows.map(row => row.original.rut))}
                      />
                    )}
        </div>
      </div>
      <div className="rounded-md border">
        <Table className="w-full">
          <TableHeader className="bg-gray-100">
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <TableHead key={header.id} className="text-left text-gray-700">
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
                        <TableCell key={cell.id} className="p-2">
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
          className={!table.getCanPreviousPage() ? "opacity-50 cursor-not-allowed" : ""}
        >
          Anterior
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className={!table.getCanNextPage() ? "opacity-50 cursor-not-allowed" : ""}
        >
          Siguiente
        </Button>
      </div>
    </div>
  );
}
