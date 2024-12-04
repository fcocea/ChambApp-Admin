import { DataTable } from "@/components/ui/data-table";
import { columns } from "../user/user-columns";
import { User } from "@/types/user";
import { getSuspendedUsers } from "@/lib/api/user";

export default async function SuspendedUsersData() {
  const data = await getSuspendedUsers();

  return (
    <>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} pagSize={10} showForgive={true} />
      </div>
    </>
  );
}