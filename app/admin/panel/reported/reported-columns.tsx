"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";

export type Advertisement = {
  ad_id: string;
  title: string;
  price: number;
  start_date: string;
  creation_date: string;
  created_by: string;
  status: string;
};

export const columns: ColumnDef<Advertisement>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected()
          || (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={value => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={value => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    )
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
    header: "Status"
  }
];