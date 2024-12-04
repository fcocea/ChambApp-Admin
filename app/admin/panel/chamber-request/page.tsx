import { DataTable } from "@/components/ui/data-table";

import { columns, Request } from "./request-columns";

async function getData(): Promise<Request[]> {
  const nombres = ["Juan", "María", "Pedro", "Ana", "Carlos", "Lucía", "José", "Elena", "Luis", "Clara"];
  const apellidos = ["Pérez", "García", "López", "Martínez", "Rodríguez", "Sánchez", "Gómez", "Fernández", "Ruiz", "Díaz"];
  // Generar 10 Request
  const request: Request[] = Array.from({ length: 10 }, (_, i) => {
    const rut = `${Math.floor(Math.random() * 10000000 + 1000000)}-${Math.floor(Math.random() * 10)}`;
    const first_name = nombres[i % nombres.length];
    const last_name = apellidos[i % apellidos.length];
    const email = `${first_name.toLowerCase()}.${last_name.toLowerCase()}@example.com`;

    return { rut, first_name, last_name, email };
  });

  return request;
}

export default async function RequestData() {
  const data = await getData();

  return (
    <>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} pagSize={10} showRequest={true} />
      </div>
    </>
  );
}
