import OverviewChart from "@/components/ui/overview-chart";
import { getAllUsers } from "@/lib/api/user";

export default async function OverviewPage() {
  const users = await getAllUsers();

  const funados = users.filter(user => user.funado).length;
  const noFunados = users.length - funados;
  const chambers = users.filter(user => user.can_be_chamber).length;
  const nochambers = users.length - chambers;

  const Funadosdata = [
    { name: "Funados", value: funados, color: "#FF6384" },
    { name: "No Funados", value: noFunados, color: "#36A2EB" }
  ];

  const Chamberdata = [
    { name: "Chambers", value: chambers, color: "#FF6384" },
    { name: "No Chambers", value: nochambers, color: "#36A2EB" }
  ];

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">¡Bienvenido de nuevo!</h1>
      <p className="mb-4">Aquí puedes ver un resumen general de la plataforma.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Usuarios Funados</h2>
          <p className="text-xl  text-gray-600">
            {funados}
          </p>
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Usuarios Chambers</h2>
          <p className=" text-xl text-gray-600">
            {chambers}
          </p>
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Usuarios No Funados</h2>
          <p className="text-xl text-gray-600">
            {noFunados}
          </p>
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Usuarios No Chambers</h2>
          <p className="text-xl text-gray-600">
            {nochambers}
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-around">
        <div className="mb-8">
          <OverviewChart data={Funadosdata} />
        </div>
        <div className="mb-8">
          <OverviewChart data={Chamberdata} />
        </div>
      </div>
    </div>
  );
}
