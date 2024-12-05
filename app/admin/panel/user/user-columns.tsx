"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Checkbox } from "@/components/ui/checkbox";
import { User } from "@/types/user";

export const columns: ColumnDef<User>[] = [
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
    header: "Rut"
  },
  {
    accessorKey: "phone",
    header: "Teléfono"
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
    accessorKey: "birth_date",
    header: "Fecha de Nacimiento"
  },
  {
    accessorKey: "gender",
    header: "Género"
  },
  {
    accessorKey: "email",
    header: "Correo Electrónico"
  },
  {
    accessorKey: "can_be_chamber",
    header: "Tipo"
  }

];
