import { BarChartData } from "@/components/BarChart";
import { PieChartData } from "@/components/PieChartData";

const API_ENDPOINT = process.env.NEXT_PUBLIC_API_URL;

export function CardUsers({ title, value }: { title: string; value: number }) {
  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-xl font-semibold">{value}</p>
    </div>
  );
}

export default async function OverviewPage() {
  const response = await fetch(`${API_ENDPOINT}/users`);
  const users = await response.json();

  const funados = users.filter((user: any) => !user.is_active).length;
  const noFunados = users.length - funados;
  const chambers = users.filter((user: any) => user.can_be_chamber).length;
  const nochambers = users.length - chambers;

  const dataFunados = [
    { name: "Inactivos", value: funados, fill: "#181a1b" },
    { name: "Activos", value: noFunados, fill: "#2580c1" }
  ];

  const dataChamber = [
    { name: "Chambers", value: chambers, fill: "#181a1b" },
    { name: "No Chambers", value: nochambers, fill: "#2580c1" }
  ];

  return (
    <div className="container mx-auto px-5 py-10 flex flex-col gap-4">
      <h1 className="text-2xl font-bold">¡Bienvenido de nuevo!</h1>

      <div className="flex flex-row justify-around gap-4">
        <div className="w-full">
          <PieChartData title="Chamber vs No Chambers" data={dataChamber} />
        </div>
        <div className="w-full">
          <PieChartData title="Activo vs Inactivos" data={dataFunados} />
        </div>
      </div>
      <BarChartData />
    </div>
  );
}
