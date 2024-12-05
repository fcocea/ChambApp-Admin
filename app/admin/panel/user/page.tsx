import { DataTable } from "@/components/ui/data-table";
import { columns } from "./user-columns";
import { User } from "@/types/user";
import { getAllUsers } from "@/lib/api/user";

export default async function UsuariosData() {
  const data = await getAllUsers();

  const mappedData = data.map(user => ({
    ...user,
    can_be_chamber: user.can_be_chamber ? "Chamber" : "Usuario"
  }));

  return (
    <>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={mappedData} pagSize={10} />
      </div>
    </>
  );
}