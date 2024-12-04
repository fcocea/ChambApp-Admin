import { DataTable } from "@/components/ui/data-table";
import { columns} from "./chamber-columns";
import { Chamber } from "@/types";
import { getAllChambers } from "@/lib/api/chamber";

export default async function ChambersData() {
  const data = await getAllChambers();

  return (
    <>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} pagSize={10} />
      </div>
    </>
  );
}