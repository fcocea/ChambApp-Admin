import { DataTable } from "@/components/ui/data-table";
import { getReportedAdvertisements } from "@/lib/api/advertisement";

import { columns } from "./reported-columns";

export default async function ReportedAdvertisements() {
  const data = await getReportedAdvertisements();

  return (
    <>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} pagSize={10} showReactivate={true} filterColumn="ad_id" aliasColumn="ID" />
      </div>
    </>
  );
}
