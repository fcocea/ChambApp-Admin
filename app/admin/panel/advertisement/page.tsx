import { DataTable } from "@/components/ui/data-table";
import { getAdvertisements } from "@/lib/api/advertisement";

import { columns } from "./ads-columns";

export default async function Advertisements() {
  const data = await getAdvertisements();

  return (
    <>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} pagSize={10} showReport={true} filterColumn="ad_id" aliasColumn="ID" />
      </div>
    </>
  );
}
