import { DataTable } from "@/components/ui/data-table";
import { getSuspendedUsers } from "@/lib/api/user";
import { User } from "@/types/user";

import { columns } from "../user/user-columns";

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
