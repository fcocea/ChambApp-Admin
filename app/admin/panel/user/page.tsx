import { DataTable } from "@/components/ui/data-table";
import { columns } from "./user-columns";
import { User } from "@/types/user";
import { getAllUsers } from "@/lib/api/user";

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