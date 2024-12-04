import { DataTable } from "@/components/ui/data-table";
import { columns } from "./ads-columns";
import { getAdvertisements } from "@/lib/api/advertisement";

export default async function Advertisements() {
  const data = await getAdvertisements();

  return (
    <>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} pagSize={10} />
      </div>
    </>
  );
}