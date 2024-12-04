"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Checkbox } from "@/components/ui/checkbox";

export type Usuarios = {
  rut: string;
  first_name: string;
  last_name: string;
  email: string;
  status: "Chamber" | "Usuario";
  profesion: string;
};

export const columns: ColumnDef<Usuarios>[] = [
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
    accessorKey: "rut",
    header: "Rut"
  },
  {
    id: "name",
    header: "Nombre",
    cell: ({ row }) => `${row.original.first_name} ${row.original.last_name}`
  },
  {
    accessorKey: "email",
    header: "Email"
  },
  {
    accessorKey: "status",
    header: "Status"
  },
  {
    accessorKey: "profesion",
    header: "Profesión",
    meta: {
      visible: (row: Usuarios) => row.status === "Chamber"
    }
  }
];
