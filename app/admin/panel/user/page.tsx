import { DataTable } from "@/components/ui/data-table";

import { columns, Usuarios } from "./user-columns";

async function getData(): Promise<Usuarios[]> {
  const nombres = ["Juan", "María", "Pedro", "Ana", "Carlos", "Lucía", "José", "Elena", "Luis", "Clara"];
  const apellidos = ["Pérez", "García", "López", "Martínez", "Rodríguez", "Sánchez", "Gómez", "Fernández", "Ruiz", "Díaz"];
  const areas = ["Ingeniero", "Médico", "Abogado", "Profesor", "Arquitecto", "Artista", "Escritor", "Científico", "Chef", "Piloto"];

  // Generar 10 usuarios
  const usuario: Usuarios[] = Array.from({ length: 10 }, (_, i) => {
    const rut = `${Math.floor(Math.random() * 10000000 + 1000000)}-${Math.floor(Math.random() * 10)}`;
    const first_name = nombres[i % nombres.length];
    const last_name = apellidos[i % apellidos.length];
    const email = `${first_name.toLowerCase()}.${last_name.toLowerCase()}@example.com`;
    const status = i % 2 === 0 ? "Chamber" : "Usuario";
    const area = status === "Chamber" ? areas[i % areas.length] : undefined;

    return { rut, first_name, last_name, email, status, area };
  });

  return usuario;
}

export default async function UsuariosData() {
  const data = await getData();

  return (
    <>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} pagSize={10} />
      </div>
    </>
  );
}
