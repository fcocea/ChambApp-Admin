import { getAllUsers } from "@/lib/api/user";
import OverviewChart from "@/components/ui/overview-chart";

export default async function OverviewPage() {
  const users = await getAllUsers();

  const funados = users.filter(user => user.funado).length;
  const noFunados = users.length - funados;
  const chambers = users.filter(user => user.can_be_chamber).length;

  const data = [
    { name: 'Funados', value: funados },
    { name: 'No Funados', value: noFunados },
    { name: 'Chambers', value: chambers },
  ];

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">Vista General</h1>
      <OverviewChart data={data} />
    </div>
  );
}