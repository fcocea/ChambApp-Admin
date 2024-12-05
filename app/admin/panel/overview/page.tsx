import { getAllUsers } from "@/lib/api/user";
import OverviewChart from "@/components/ui/overview-chart";

export default async function OverviewPage() {
  const users = await getAllUsers();

  const funados = users.filter(user => user.funado).length;
  const noFunados = users.length - funados;
  const chambers = users.filter(user => user.can_be_chamber).length;

  const data = [
    { name: 'Funados', value: funados, color: '#FF6384' },
    { name: 'No Funados', value: noFunados, color: '#36A2EB' },
    { name: 'Chambers', value: chambers, color: '#FFCE56' },
  ];

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">¡Bienvenido de nuevo!</h1>
      <p className="mb-4">Aquí puedes ver un resumen general de la plataforma. Usa la barra lateral para navegar a diferentes secciones.</p>
      <div className="mb-8">
        <OverviewChart data={data} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Usuarios Funados</h2>
          <p className="text-gray-600">Total: {funados}</p>
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Usuarios No Funados</h2>
          <p className="text-gray-600">Total: {noFunados}</p>
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Chambers</h2>
          <p className="text-gray-600">Total: {chambers}</p>
        </div>
      </div>
    </div>
  );
}