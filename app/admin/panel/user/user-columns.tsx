"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Checkbox } from "@/components/ui/checkbox";

export type Usuarios = {
  rut: string;
  phone: string;
  first_name: string;
  last_name: string;
  password: string;
  birth_date: Date;
  gender: string;
  email: string;
  account_creation_date: Date;
  can_be_chamber: boolean;
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
        aria-label="Seleccionar todo"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={value => row.toggleSelected(!!value)}
        aria-label="Seleccionar fila"
      />
    )
  },
  {
    accessorKey: "rut",
    header: "RUT"
  },
  {
    accessorKey: "first_name",
    header: "Nombre"
  },
  {
    accessorKey: "last_name",
    header: "Apellido"
  },
  {
    accessorKey: "email",
    header: "Correo Electrónico"
  },
  {
    accessorKey: "phone",
    header: "Teléfono"
  },
  {
    accessorKey: "birth_date",
    header: "Fecha de Nacimiento"
  }
];
