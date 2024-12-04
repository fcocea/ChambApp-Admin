import { DataTable } from "@/components/ui/data-table";
import { columns } from "./reported-columns";
import { getReportedAdvertisements } from "@/lib/api/advertisement";

export default async function ReportedAdvertisements() {
  const data = await getReportedAdvertisements();

  return (
    <>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} pagSize={10} showReactivate={true} />
      </div>
    </>
  );
}