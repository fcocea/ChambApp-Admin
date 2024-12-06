"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Checkbox } from "@/components/ui/checkbox";
import { Advertisement } from "@/types/advertisement";

export const columns: ColumnDef<Advertisement>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected()
          || (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={value => {
          console.log(value);
          const isChecked = value;
          table.getRowModel().rows.forEach(row => {
            const status = row.getValue("status");
            if (status === "Petición") {
              row.toggleSelected();
            }
          });
        }}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => {
      const status = row.getValue("status");
      return status === "Petición"
        ? (
            <Checkbox
              checked={row.getIsSelected()}
              onCheckedChange={value => row.toggleSelected(!!value)}
              aria-label="Select row"
            />
          )
        : (
            <Checkbox
              checked={false}
              disabled
              aria-label="Select row"
            />
          );
    }
  },
  {
    accessorKey: "ad_id",
    header: "ID"
  },
  {
    accessorKey: "title",
    header: "Título"
  },
  {
    accessorKey: "price",
    header: () => <div className="text-right">Precio</div>,
    cell: ({ row }) => {
      const precio = parseFloat(row.getValue("price"));
      const formatted = new Intl.NumberFormat("es-CL", {
        style: "currency",
        currency: "CLP",
        minimumFractionDigits: 0
      }).format(precio);
      return <div className="text-right font-medium">{formatted}</div>;
    }
  },
  {
    accessorKey: "start_date",
    header: "Inicio Chamba"
  },
  {
    accessorKey: "creation_date",
    header: "Creación Chamba"
  },
  {
    accessorKey: "created_by",
    header: "Creado por"
  },
  {
    accessorKey: "status",
    header: "Estado"
  }
];
