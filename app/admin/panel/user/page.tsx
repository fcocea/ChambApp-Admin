import { DataTable } from "@/components/ui/data-table";
import { columns, Usuarios } from "./user-columns";
import { getAllUsers } from "@/lib/endpoints_communication";

export default async function UsuariosData() {
  const data = await getAllUsers();

  return (
    <>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} pagSize={10} />
      </div>
    </>
  );
}